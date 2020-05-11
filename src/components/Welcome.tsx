import React, { FC } from 'react';
import { Text, View, Image, ImageSourcePropType } from 'react-native';
import { welcomeStyles } from '../constans/Styles';

interface IHomescreenCompProp  {
    headerText:string;
    text:string;
    image:ImageSourcePropType
}

const HomescreenComp:FC<IHomescreenCompProp> = ({headerText, text, image}) => {
    return (
        <View style={welcomeStyles.container}> 
            <View style={welcomeStyles.header}>
                <Image 
                style={welcomeStyles.headerImage}
                source={image}>
                </Image>
                <Text style={welcomeStyles.headerText}>
                {headerText}
                </Text>
            </View>
            <View>
                <Text style={welcomeStyles.text}>
                    {text}
                </Text>
            </View>
           
           
           
        </View>
    );
}


export default HomescreenComp;