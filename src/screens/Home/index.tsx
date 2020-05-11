import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import Welcome from '../../components/Welcome';


const Homescreen = () => {
    
    const headerText = 'Welcome to ToDo';
    const text = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maxime quas eligendi enim quos? Aliquam incidunt deserunt eveniet, sit adipisci dolor impedit culpa nesciunt modi totam officiis quae repellendus est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maxime quas eligendi enim quos? Aliquam incidunt deserunt eveniet, sit adipisci dolor impedit culpa nesciunt modi totam officiis quae repellendus est."

    return (
        <Welcome headerText={headerText} text={text} image={require('../../assets/appIcon.png')} />
    );
};


export default Homescreen;

