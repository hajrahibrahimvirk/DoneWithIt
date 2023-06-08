import { Image, StyleSheet, View } from "react-native";
import { Icon } from '@rneui/themed';

import colors from '../config/colors'

function ViewScreen() {
    return (
        <View style={styles.background}>
        <View style = {styles.closeIcon}>
        <Icon
                name='close'
                type='font-awesome'
                color={'white'}
                 />
        </View>
        <View style = {styles.deleteIcon}>
        <Icon
                name='trash'
                type='font-awesome'
                color={'white'}
                 />
        </View>
        <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../images/chair.jpg')}/>

        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:colors.black
    },
    img:{
        height:'100%',
        width: '100%'
    },
    closeIcon:{
        height:50,
        width:50,
       
        position:'absolute',
        top:40,
        left:30,
    },
    deleteIcon:{
        height:50,
        width:50,
        position:'absolute',
        top:40,
        right:30,
    }
})

export default ViewScreen;