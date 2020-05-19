import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constans/Colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').height

export const welcomeStyles = StyleSheet.create({
    header : {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderStyle: 'solid',
        borderColor: colors.lightGrey,
        borderWidth: 1,
        
    },
    headerImage: {
        height: 65,
        width: 65,
        margin: 15
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 10
        
    },
    text: {
        marginTop: 10,
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
        flex: 3,
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
        height: "10%",
        borderRadius: 5,
        padding: 5,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: colors.lightGrey
    },
    textInput: {
        backgroundColor: colors.white,
        height: "45%",
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
    },
    headerText :{
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 15,
        marginBottom: 10
    },
    tileContainer: {
        padding: 5,
    },
    tile: {
        
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
        height: 80,
        width: 80,
        margin: 7,
        borderRadius: 10,
        
    },
    tileTextContainer:{
        marginTop: 5,
        marginLeft: 5,
        flex: 1
    },
    tileText: {
    }
})

