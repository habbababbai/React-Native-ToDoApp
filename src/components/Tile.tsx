import React, { FC } from 'react';
import { Text, View, Image, ImageSourcePropType} from 'react-native';
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
                <Image style={galleryStyles.tileImage} resizeMode='cover' source={imageSrc}></Image>
               
                <View style={galleryStyles.tileTextContainer}>
                    <Text style={galleryStyles.tileText}>{tileText}</Text>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={galleryStyles.tile}>
                <View style={galleryStyles.tileTextContainer}>
                    <Text style={galleryStyles.tileText}>{tileText}</Text>
                </View>
                <Image style={galleryStyles.tileImage} resizeMode='cover' source={imageSrc}></Image>
            </View>
        )
    }
    
}

export default Tile;
