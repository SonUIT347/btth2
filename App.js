import { StatusBar } from 'expo-status-bar';
import { Children, createContext, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bai3 from './component/Bai3';
import Layout from './component/Layout';
import Login from './screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './component/AuthNav';
import Authenticate from './component/Authenticate';
import Newfeed from './screen/Newfeed';
import Header from './component/Header';

export default function App() {
  return (
    <Authenticate>
      <NavigationContainer>
        <AuthNav />
      </NavigationContainer>
    </Authenticate>
  );
}
