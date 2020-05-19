import React, { FC } from 'react';
import { Text, View, Image, ImageSourcePropType, ScrollView} from 'react-native';
import { galleryStyles } from '../constans/Styles';

interface ITileProp {
    tileText: string,
    imageLeft: boolean,
    imageSrc:ImageSourcePropType
} 

const Tile:FC<ITileProp> = ({tileText, imageSrc, imageLeft}) => {
    if (imageLeft){
        return (
            <View style={galleryStyles.tile}>
                <Image style={{height:80, width:80, margin: 7, borderRadius: 10}} resizeMode='contain' source={imageSrc}></Image>
               
                <ScrollView style={galleryStyles.tileTextContainer}>
                    <Text style={galleryStyles.tileText}>{tileText}</Text>
                </ScrollView>
            </View>
        )
    }
    else {
        return (
            <View style={galleryStyles.tile}>
                <ScrollView style={galleryStyles.tileTextContainer}>
                    <Text style={galleryStyles.tileText}>{tileText}</Text>
                </ScrollView>
                
                <Image style={{height:80, width:80, margin: 7, borderRadius: 50}} resizeMode='contain' source={imageSrc}></Image>
            </View>
        )
    }
    
}

export default Tile;
