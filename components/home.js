import {ImageBackground, StyleSheet, Image, View, Text, Button,TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

import colors from '../config/colors'


function Home() {
    return (
   
        <ImageBackground
        style={styles.background}
        source={require('../images/background.jpg')}>
       <Image
       style={styles.logo}
       source={require('../images/logo-red.png')}
       />
       <Text style={styles.text}>
        Sell What You Don't Need
       </Text>
  
      <TouchableOpacity  style={styles.loginButton}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.registerButton}>
        <Text>Register</Text>
      </TouchableOpacity>
        </ImageBackground>
     
    );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logo:{
    width:100,
    height:100,
    bottom:450
  },
  loginButton: {
    width:'50%',
    height:30,
    backgroundColor: colors.secondary,
    justifyContent:'center',
    alignItems:'center',
    margin:'2%',
    borderRadius: 10,

  },
  registerButton: {
    width:'50%',
    height:30,
    backgroundColor: colors.primary,
    justifyContent:'center',
    alignItems:'center',
    margin:'2%',
    marginBottom:'14%',
    borderRadius: 10,

  },
  text:{
    bottom:440,
    fontWeight:'bold'
  }
})


export default Home;