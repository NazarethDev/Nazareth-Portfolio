import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome6 } from '@expo/vector-icons';

import { Resume } from '../screens/Resume';
import { RepoList } from '../screens/RepoList';
import { Contact } from '../screens/Contact';

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
    return (
        <Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#010101'

            },
            tabBarActiveTintColor: '#ffffff'
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
                            color='#ffffff' />
                    )
                }}
            />
            <Screen
                name='Repositories'
                component={RepoList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name="code"
                            size={size}
                            color='#ffffff' />
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
                            color='#ffffff' />
                    )
                }}
            />
        </Navigator>
    )
}