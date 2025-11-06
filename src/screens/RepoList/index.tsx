import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { gitHubService } from '../../services/gitHubService';
import { styles } from './styles'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/StackNavigationRoutes";

import { useState, useEffect } from 'react';

type RepoListNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "RepoList"
>;

export function RepoList() {

    const [repos, setRepos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation<RepoListNavigationProp>();

    useEffect(() => {
        async function fetchRepos() {
            try {
                const data = await gitHubService('', false);

                const simplifiedData = data.map((repo: any) => ({
                    name: repo.name,
                    description: repo.description,
                    language: repo.language,
                }));

                setRepos(simplifiedData);
            } catch (error) {
                console.error('Erro ao buscar repositórios da API:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchRepos();

    }, []);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size='large' />
                <Text>Loading repositories...</Text>
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            {repos.map((repo, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.repoContainer}
                    onPress={() => navigation.navigate('Readme', { repoName: repo.name })}>
                    <Text style={styles.repoName}>{repo.name.replace(/-/g, ' ')}</Text>
                    <Text style={styles.repoDescriprion}>{repo.description ?? 'No discription available'}</Text>
                    <Text style={styles.repoLanguages}>{repo.language ?? 'No language information'}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )

}