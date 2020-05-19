import React, { FC } from 'react';
import { Text, View, Image, ImageSourcePropType, ScrollView } from 'react-native';
import { welcomeStyles } from '../constans/Styles';

interface IHomescreenCompProp  {
    headerText:string;
    text:string;
    image:ImageSourcePropType
}

const HomescreenComp:FC<IHomescreenCompProp> = ({headerText, text, image}) => {
    return (
        <View> 
            <View style={welcomeStyles.header}>
                <Image 
                style={welcomeStyles.headerImage}
                source={image}>
                </Image>
                <Text style={welcomeStyles.headerText}>
                {headerText}
                </Text>
            </View>
            <ScrollView>
                <Text style={welcomeStyles.text}>
                    {text}
                </Text>
                <View style={{height: 120}}/>
            </ScrollView>
           
           
           
        </View>
    );
}


export default HomescreenComp;