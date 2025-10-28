import { BottomTabsRoutes } from "./BottomTabsRoutes";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
    return (
        <NavigationContainer>
            <BottomTabsRoutes />
        </NavigationContainer>
    )
}