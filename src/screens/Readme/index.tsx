import { ScrollView, ActivityIndicator } from 'react-native'
import { markdownConversor } from '../../services/markdownConversor'
import Markdown from 'react-native-markdown-display'
import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'


export function Readme() {
    const route = useRoute();
    const { repoName } = route.params as {repoName: string}
    const [loading, setLoading] = useState(true);
    const [md, setMd] = useState('');

    useEffect(() => {
        (async () => {
            const content = await markdownConversor(repoName);
            setMd(content);
            setLoading(false);
        })();
    }, [repoName]);

    if (loading) return <ActivityIndicator size='large' />

    return (
        <ScrollView style={{ padding: 16 }}>
            <Markdown>{md}</Markdown>
        </ScrollView>
    );

}