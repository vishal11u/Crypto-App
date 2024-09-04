import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import StockDetailScreen from './src/screens/StockDetailScreen';
import Practice from './src/screens/Practice';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator inside Drawer
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="StockDetail" component={StockDetailScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveTintColor: 'red',
      drawerInactiveTintColor: 'black',
      drawerLabelStyle: {
        marginLeft: -20,
      },
      drawerItemStyle: {
        marginVertical: 0,
      },
    }}
  >
    <Drawer.Screen
      name="Home Screen"
      component={StackNavigator}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Charts"
      component={Practice}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons name="analytics" size={size} color={color} />
        ),
      }}
    />

  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
