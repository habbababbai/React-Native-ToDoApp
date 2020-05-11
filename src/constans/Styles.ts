import { StyleSheet } from 'react-native';
import { colors } from '../constans/Colors'

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
    
    header : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        maxHeight: 100,
        backgroundColor: colors.white,
        borderStyle: 'solid',
        borderColor: colors.lightGrey,
        borderWidth: 1
    },
    headerImage: {
        height: 65,
        width: 65,
        marginLeft: 15,
        marginTop: 22,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 39,
        marginLeft: 10
        
    },
    text: {
        padding: 10,
        fontSize: 20
    }
});
export const listStyles = StyleSheet.create({
    addButton : {
        alignItems: 'center',
        backgroundColor: colors.blue,
        borderRadius: 10,
        margin: 10,
    },
    addButtonText : {
        fontSize: 20,
        padding: 15,
        color: colors.white
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: colors.lightGrey,
        margin: 10,
        borderRadius: 5,
        backgroundColor: colors.white
    },
    todoText: {
        flex: 1,
        flexDirection: 'column',
    },
    formContainer: {
        padding: 15
    },
    formText: {
        padding: 6,
        fontSize: 24
    },
    titleInput: {
        backgroundColor: colors.white,
        height: 35,
        borderRadius: 5,
        padding: 5,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: colors.lightGrey
    },
    textInput: {
        backgroundColor: colors.white,
        height: 195,
        borderRadius: 5,
        padding: 5,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: colors.lightGrey
    }
    
    
})
export const galleryStyles = StyleSheet.create({
    header: {
        backgroundColor: colors.white,
        borderStyle: 'solid',
        borderColor: colors.lightGrey,
        borderWidth: 1,
        height: 100
    },
    headerText :{
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 15,
    },
    tileContainer: {
        padding: 5,
        alignContent: 'center'
    },
    tile: {
        height: 97,
        backgroundColor: colors.white,
        margin: 2,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: colors.lightGrey,
        borderWidth: 1
    },
    tileImage: {
        height: 85,
        width: 85,
        margin: 5,
        borderRadius: 10,
        
    },
    tileTextContainer:{
        marginTop: 10,
        marginLeft: 5
    },
    tileText: {
        fontSize: 12,
        width: 250
    }
})

