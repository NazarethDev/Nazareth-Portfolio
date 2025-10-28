import axios from "axios";
import { GITHUB_BASE_URL_ONE_REPO, GITHUB_BASE_URL_ALL_REPOS_LIST } from '../config/config'

export const gitHubService = async (repoName: string, isOneRepo: boolean) => {

    if (isOneRepo) {
        try {
            const response = await axios.get(
                GITHUB_BASE_URL_ONE_REPO + repoName
            )
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            const response = await axios.get(
                GITHUB_BASE_URL_ALL_REPOS_LIST
            )
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}
