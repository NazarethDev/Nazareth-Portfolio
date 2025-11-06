import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome6 } from '@expo/vector-icons';

import StackRoutes from "./StackNavigationRoutes"

import { Resume } from '../screens/Resume';
import { RepoList } from '../screens/RepoList';
import { Contact } from '../screens/Contact';

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
    return (
        <Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#191918'

            },
            tabBarActiveTintColor: '#2A62FD',
            tabBarInactiveTintColor: '#eeeeee'
        }}>
            <Screen
                name='Resume'
                component={Resume}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name="file-lines"
                            size={size}
                            color={color} />
                    )
                }}
            />
            <Screen
                name='Repositories'
                component={StackRoutes}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name="code"
                            size={size}
                            color={color} />
                    )
                }}
            />
            <Screen
                name='Contact'
                component={Contact}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name="phone"
                            size={size}
                            color={color} />
                    )
                }}
            />
        </Navigator>
    )
}