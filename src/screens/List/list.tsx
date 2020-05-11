import React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import ToDos from '../../components/ToDos'
import { listStyles } from '../../constans/Styles'


const Listscreen =  ({navigation}) => {
    const pressHandler = () => {
        navigation.push('Form');
    }
    return (
        <View>
            <TouchableOpacity style={listStyles.addButton}  onPress={pressHandler}>
                <Text style={listStyles.addButtonText}>Add ToDo</Text>
            </TouchableOpacity>
            <ToDos />
        </View>
        
    )
}



export default Listscreen;