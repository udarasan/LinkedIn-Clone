import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import auth from '@react-native-firebase/auth'
import TabNavScreen from './../TabNavScreen/TabNavScreen';





export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const user = auth().currentUser;
    return (
      <View>
      <Image
      style={styles.tinyLogo}
      source={require('../../assests/LinkedIn_Logo.png')}
      />
      <Text style={styles.txt5}>Sign Up</Text>
      <Text>or  <TouchableOpacity style={styles.btn8}><Text style={styles.btn7}>Sign</Text></TouchableOpacity></Text>
      <TextInput style={styles.txtinput1}
      label="Email or Phone"
      />
      <TextInput style={styles.txtinput1}
      label="username"
      />
      <TextInput  style={styles.txtinput2}
      label="Password"
      secureTextEntry
      right={<TextInput.Icon name="eye" />}
      />
      <Button style={styles.btn1}   onPress={() => GoogleSignin.signOut().then(()=>console.log("Signed out with Google!"))}>
      <Text style={styles.txt1}>Continue</Text>
      </Button>
      <Text style={styles.txt6}>or</Text>
      <TouchableOpacity style={styles.btn2}   onPress={() => console.log("udara")}>
      <Image
      style={styles.tinyLogo2}
      source={require('../../assests/google-logo.png')}
      />
       <Text style={styles.txt2 } >Sign in with Google</Text>
      </TouchableOpacity>
  </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FEFEFE',
    color:'#FEFEFE',
  },
  tinyLogo: {
        marginTop:10,
        width: 111,
        height: 27.7,
        marginLeft:10
  },
  txt5:{
      marginTop:25,
      fontSize:30,
      fontWeight:'bold',
      color:'#202124',
      marginTop:20
  },
  btn7:{
      color:'#0A66C2',

  },
  txtinput1:{
      marginTop:10
  },
  btn1:{
      marginTop:10,
      backgroundColor:'#0A66C2',
      width: 310,
      height: 50,
      alignSelf:'center',
      borderRadius:30
    },
    txt1:{
      fontSize:20,
      color:'white',
      marginTop:10
  },
  txt6:{
      alignSelf:'center',
      marginTop:15
  },
  btn2:{
      marginTop:10,
      width: 310,
      height: 50,
      backgroundColor:'white',
      alignSelf:'center',
      borderRadius:30,
      borderColor:'#646464',
      borderWidth:1
  },
  tinyLogo2: {
      marginTop:10,
      width: 30,
      height: 30,
      alignSelf:'center',
      marginLeft:-238,
    },
    txt2:{
      fontSize:23,
      alignSelf:'center',
      marginTop:-31,
      fontWeight:'bold'
  },
  btn8:{
      marginTop:20
  },
  txtinput2:{
      marginTop:10
  },
})