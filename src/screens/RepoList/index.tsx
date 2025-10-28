import { View, Text, ActivityIndicator, ScrollView, StatusBar } from 'react-native';
import { gitHubService } from '../../services/gitHubService';
import { styles } from './styles'

import { useState, useEffect } from 'react';

export function RepoList() {

    const [repos, setRepos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const data = await gitHubService('', false);

                const simplifiedData = data.map((repo:any)=> ({
                    name: repo.name,
                    description: repo.description,
                    language:repo.language, 
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
                <View key={index} style={styles.repoContainer}>
                    <Text style={styles.repoName}>{repo.name.replace('-', ' ')}</Text>
                    <Text style={styles.repoDescriprion}>{repo.description ?? 'No discription available'}</Text>
                    <Text style={styles.repoLanguages}>{repo.language ?? 'No language information'}</Text>
                </View>
            ))}
        </ScrollView>
    )

}