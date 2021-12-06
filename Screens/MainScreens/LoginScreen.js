import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assests/LinkedIn_Logo.png')}
        />
        <TouchableOpacity><Text style={styles.txt3} >Join now</Text></TouchableOpacity>
        <Text style={styles.txt5}>Sign in</Text>
        <TextInput style={styles.txtinput1}
          label="Email or Phone"
        />
        <TextInput style={styles.txtinput2}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
        <TouchableOpacity style={styles.btn3}><Text style={styles.txt4}>Forgot password?</Text></TouchableOpacity>
        <Button style={styles.btn1} onPress={() => console.log('Pressed')}>
          <Text style={styles.txt1}>Sign in</Text>
        </Button>
        <Text style={styles.txt6}>or</Text>
        <TouchableOpacity style={styles.btn2} onPress={() => this.showMenu()}>
          <Image
            style={styles.tinyLogo2}
            source={require('../../assests/google-logo.png')}
          />
          <Text style={styles.txt2}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={() => this.showMenu()}>
          <Image
            style={styles.tinyLogo2}
            source={require('../../assests/apple-logo.png')}
          />
          <Text style={styles.txt2}>Sign in with Apple</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    color: '#FEFEFE',
  },
  tinyLogo: {
    marginTop: 10,
    width: 111,
    height: 27.7,
    marginLeft: 10
  },
  txt3: {
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#0A66C2',
    marginTop: -25,
    marginLeft: 250
  },
  txt4: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#0A66C2'
  },
  txt5: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#202124',
    marginTop: 20
  },
  tinyLogo2: {
    marginTop: 10,
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: -238,


  },
  btn2: {
    marginTop: 10,
    width: 310,
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: '#646464',
    borderWidth: 1
  },
  txt2: {
    fontSize: 23,
    alignSelf: 'center',
    marginTop: -31,
    fontWeight: 'bold'
  },
  btn1: {
    marginTop: 10,
    backgroundColor: '#0A66C2',
    width: 310,
    height: 50,
    alignSelf: 'center',
    borderRadius: 30
  },
  txt1: {
    fontSize: 20,
    color: 'white'
  },
  txtinput1: {
    marginTop: 10
  },
  txtinput2: {
    marginTop: 10
  },
  btn3: {
    marginTop: 15,
    width: 150,
    height: 25,
  },
  txt6: {
    alignSelf: 'center',
    marginTop: 15
  }

})
