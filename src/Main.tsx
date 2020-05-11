import React, { FC } from 'react';
import { View, SafeAreaView, Platform, StatusBar } from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';

import Welcome from './screens/Home';
import BottomTabs from './components/BottomNavigation';


const Main: FC = () => {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>

        
    );
};

export default Main;