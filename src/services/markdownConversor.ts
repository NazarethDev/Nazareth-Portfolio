import { Buffer } from 'buffer'
import { gitHubService } from './gitHubService'

export async function markdownConversor(repoName: string): Promise<string> {
    try{
        const data = await gitHubService(repoName, true)

        if (data && data.encoding === 'base64' && data.content) {
            const markdown = Buffer.from(data.content, 'base64').toString('utf8');
            return markdown;
        } else {
            return 'Readme não encontrado ou formato de resposta da API inválido.'
        }
    } catch (error){
        console.error('Erro em markdownConversor: ', error);
        return 'Erro ao converter o Readme';
    }
}