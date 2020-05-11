import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import home from '../screens/Home/index';
import todolist from '../screens/List/index';
import gallery from '../screens/Gallery/index';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={home} 
            options={{
                tabBarLabel:'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                )
            }}
                />
            <Tab.Screen 
            name="List" 
            component={todolist} 
            options={{
                tabBarLabel:'List',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen 
            name="Details" 
            component={gallery} 
            options={{
                tabBarLabel:'Gallery',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="note-text" color={color} size={size}/>
                )
            }}
            />
        </Tab.Navigator>
    )
        
}

export default BottomTabs;