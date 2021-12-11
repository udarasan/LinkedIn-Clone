import React, { Component } from 'react';
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import StartScreen from './StartScreen';


export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
          require('../../assests/screen1.png'),
          require('../../assests/screen2.png'),
          require('../../assests/screen3.png'), 
        ],
      

  };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('../../assests/LinkedIn_Logo.png')}
        />
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          dotStyle={{
            borderColor:'#646464'
          
          }}
          sliderBoxHeight={400}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
        <Button style={styles.btn1}onPress={()=>GoogleSignin.signOut().then(()=>this.props.navigation.navigate('StartScreen'))}>
            <Text style={styles.txt1} >Log Out</Text>
  </Button>
 
 
 
        <TouchableOpacity><Text style={styles.txt3} onPress={()=>this.props.navigation.navigate('LoginScreen')}>Sign In</Text></TouchableOpacity>
        
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
      tinyLogo2: {
        marginTop:10,
        width: 30,
        height: 30,
        alignSelf:'center',
        marginLeft:-215,
       

      },
      btn1:{
        marginTop:10,
        backgroundColor:'#0A66C2',
        width: 310,
        height: 50,
        alignSelf:'center',
        borderRadius:30
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
    txt1:{
        fontSize:20,
        color:'white'
    },
    txt2:{
        fontSize:23,
        alignSelf:'center',
        marginTop:-31,
        fontWeight:'bold'
    },
    txt3:{
        fontSize:20,
        alignSelf:'center',
        marginTop:13,
        fontWeight:'bold',
        color:'#0A66C2'
    },
    img3:{
      marginTop:-40,
      marginLeft:-5,
      width:30,
      height:30,
    },
    img4:{
      marginTop:10,
      alignSelf:'center',
      width:130,
      height:130,
    },
    txt4:{
      fontSize:19,
      marginTop:-28,
      marginLeft:35,
      
  },
  txt5:{
    fontSize:23,
    alignSelf:'center',
    // marginTop:-31,
    fontWeight:'bold',
    color:'#202124'
},
txt6:{
  fontSize:18,
  marginTop:10,
  fontWeight:'bold',
  color:'#202124'
},
txt7:{
  fontSize:18,
  // marginTop:10,
  color:'red'
},
})
