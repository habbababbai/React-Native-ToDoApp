import React, { FC, useState, Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { listStyles } from '../../constans/Styles';
import { addTodo } from '../../actions';


const FormScreen = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    
    const dispatch = useDispatch();
    
    const pressHandler = () => {
        if(title != '')
        {
            navigation.pop();
            dispatch(addTodo(title,text));
        }
    }
    //onPress={() => {dispatch({type: 'ADD_TODO', title, text}), pressHandler}}
    return (
        <View style={listStyles.formContainer}>
            <Text style={listStyles.formText}>Title:</Text>
            <TextInput style={listStyles.titleInput} onChangeText={(title) => setTitle(title)} value={title}></TextInput>
            <Text style={listStyles.formText}>Text:</Text>
            <TextInput style={listStyles.textInput} onChangeText={(text) => setText(text)} value={text} multiline={true}></TextInput>
            <TouchableOpacity style={listStyles.addButton} onPress={pressHandler}>
                <Text style={listStyles.addButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}



export default FormScreen;