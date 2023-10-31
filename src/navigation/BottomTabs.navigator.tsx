/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Explore } from '../screens/Explore.screen';
import { Saved } from '../screens/Saved.sreen';
import { Alerts } from '../screens/Alerts.sreen';
import { Profile } from '../screens/Profile.screen';
import { theme } from '../constants';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, string> = {
            Explore: focused ? 'search' : 'search-outline',
            Saved: focused ? 'heart' : 'heart-outline',
            Alerts: focused ? 'notifications' : 'notifications-outline',
            Profile: focused ? 'person' : 'person-outline',
          };

          return (
            <Ionicons
              name={icons[route.name] ?? ''}
              color={color}
              size={size}
            />
          );
        },
      })}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Alerts" component={Alerts} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
