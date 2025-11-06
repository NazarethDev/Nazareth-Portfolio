import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RepoList } from "../screens/RepoList";
import { Readme } from "../screens/Readme";

export type RootStackParamList = {
    RepoList: undefined;
    Readme: {repoName: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RepoList" component={RepoList} options={{ headerShown: false }} />
            <Stack.Screen name="Readme" component={Readme} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

}