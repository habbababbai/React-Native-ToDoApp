import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { galleryStyles } from '../../constans/Styles'
import Tile from '../../components/Tile'

const Gallery = () => {
    
    const tiletext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto eius ipsa excepturi deleniti minima! Beatae blanditiis aspernatur quod, cupiditate qui cumque.";
    
    return (
       <View>
            <View style={galleryStyles.header}>
                <Text style={galleryStyles.headerText}>
                    Gallery
                </Text>
            </View>
            <View style={galleryStyles.tileContainer}>
                <Tile imageLeft={true} tileText={tiletext} imageSrc={require('../../assets/pic1.jpg')}/>
                <Tile imageLeft={false} tileText={tiletext} imageSrc={require('../../assets/pic2.jpg')}/>
                <Tile imageLeft={true} tileText={tiletext} imageSrc={require('../../assets/pic3.jpg')}/>
                <Tile imageLeft={false} tileText={tiletext} imageSrc={require('../../assets/pic4.jpg')}/>
                <Tile imageLeft={true} tileText={tiletext} imageSrc={require('../../assets/pic5.jpg')}/>
            </View>
       </View>
    )
}
export default Gallery;