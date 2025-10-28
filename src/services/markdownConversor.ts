import { Buffer } from 'buffer'
import { gitHubService } from './gitHubService'

export async function markdownConversor(repoName: string) {
    try{
        const data = await gitHubService(repoName, true)

        if (data && data.encoding === 'base64' && data.content) {
            const marwdown = Buffer.from(data.content, 'base64').toString('utf8');
            return marwdown;
        } else {
            return 'Readme não encontrado ou formato de resposta da API inválido.'
        }
    } catch (error){
        console.error('Erro em markdownConversor: ', error)
    }
}