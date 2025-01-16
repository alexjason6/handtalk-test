import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Logout from '../pages/Logout';
import Render from '../pages/Render';
import Account from '../pages/Settings';

import TabBarIcon from './components/Tab';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen
        name="3D"
        options={{
          title: 'Objetos 3D',
          tabBarIcon: TabBarIcon('home'),
        }}
       component={Render}
      />

      <Tab.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: TabBarIcon('settings'),
        }}
       component={Account}
      />

      <Tab.Screen
        name="Logout"
        options={{
          title: 'Logout',
          tabBarIcon: TabBarIcon('log-out'),
        }}
       component={Logout}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
