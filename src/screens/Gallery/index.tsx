import React, { FC } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { galleryStyles } from '../../constans/Styles'
import Tile from '../../components/Tile'

const Gallery = () => {
    
    const tiletext = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptate optio perferendis repudiandae nesciunt iusto? In ipsum, natus neque vero ipsa eveniet dolor dolores atque, autem, eos sint repudiandae ipsam?";
    
    return (
       <View>
            <View style={galleryStyles.header}>
                <Text style={galleryStyles.headerText}>
                    Gallery
                </Text>
            </View>
            <ScrollView style={galleryStyles.tileContainer}>
                <Tile imageLeft={true} tileText={tiletext} imageSrc={require('../../assets/pic1.jpg')}/>
                <Tile imageLeft={false} tileText={tiletext} imageSrc={require('../../assets/pic2.jpg')}/>
                <Tile imageLeft={true} tileText={tiletext} imageSrc={require('../../assets/pic3.jpg')}/>
                <Tile imageLeft={false} tileText={tiletext} imageSrc={require('../../assets/pic4.jpg')}/>
                <Tile imageLeft={true} tileText={tiletext} imageSrc={require('../../assets/pic5.jpg')}/>
            </ScrollView>
       </View>
    )
}
export default Gallery;