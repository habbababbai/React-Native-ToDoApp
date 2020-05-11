import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { listStyles } from '../constans/Styles';

const ToDoList = ({todos, toggleTodo, deleteTodo}) => {
    
    return (
        <View>
            <ScrollView>
            {todos.map(todo =>
            <View key={todo.id} style={listStyles.todo}>
                <TouchableOpacity  onPress={() => toggleTodo(todo.id)}>
                    <MaterialCommunityIcons size={45} name='check' color='#79797A'/>
                </TouchableOpacity>
                <View style={listStyles.todoText}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '800',
                        textDecorationLine: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? 'grey' : 'black'
                    }}>{todo.title}</Text>
                    <Text style={{
                        fontSize: 16,
                        textDecorationLine: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? 'grey' : 'black'
                    }}>{todo.text}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                    <MaterialCommunityIcons name='delete' color='#79797A' size={45}/>
                </TouchableOpacity>
            </View>
            )}
            <View style={{height:180}}></View>
        </ScrollView>
        </View>
    )
}


export default ToDoList;