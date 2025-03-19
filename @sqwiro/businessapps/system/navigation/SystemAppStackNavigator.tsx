import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SystemAppProvider from '../context/SystemAppProvider';
import SystemAppDashboard from '../dashboards/SystemAppDashboard';
import SystemAppHome from '../apphome/SystemAppHome';

const Stack = createStackNavigator();

const SystemAppNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'SystemAppHome'}
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="SystemAppHome" component={SystemAppHome} />
        <Stack.Screen
          name="SystemAppDashboard"
          component={SystemAppDashboard}
        />
      </Stack.Navigator>
    </>
  );
};

const SystemAppStackNavigator = (props) => {
  return (
    <SystemAppProvider>
      <SystemAppNavigator />
    </SystemAppProvider>
  );
};
export default SystemAppStackNavigator;
