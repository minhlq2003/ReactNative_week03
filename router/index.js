import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from '../components/FirstScreen';
import Screen1a from '../components/Screen1a';
import Screen1b from '../components/Screen1b';
import Screen1c from '../components/Screen1c';
import Screen1d from '../components/Screen1d';
import Screen1e from '../components/Screen1e';
import Screen2a from '../components/Screen2a';
import XMEye from '../components/XMEye';

const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<DrawerNavigator />} />
        </Routes>
      </NativeRouter>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FirstScreen" component={FirstScreen} />
        <Drawer.Screen name="Screen1a" component={Screen1a} />
        <Drawer.Screen name="Screen1b" component={Screen1b} />
        <Drawer.Screen name="Screen1c" component={Screen1c} />
        <Drawer.Screen name="Screen1d" component={Screen1d} />
        <Drawer.Screen name="Screen1e" component={Screen1e} />
        <Drawer.Screen name="Screen2a" component={Screen2a} />
        <Drawer.Screen name="XMEye" component={XMEye} />
    </Drawer.Navigator>
  );
}
