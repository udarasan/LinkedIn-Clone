import React, { Component } from 'react';
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Button } from 'react-native-paper';
import BottomActionMenu from 'react-native-bottom-action-menu';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import auth from '@react-native-firebase/auth'
import TabNavScreen from './../TabNavScreen/TabNavScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '270224944187-hk1i61fdja7g092shna2mt30706vpbdh.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();
  

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export default class StartScreen extends Component {
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
 
  componentDidMount(){
   if(auth().currentUser!=null){

     console.log("Have user");
    this.props.navigation.navigate('TabNavScreen')
   }else{
    console.log("Have Not user");
    
    
   }
  }
  showMenu() {
    this.bottomActionMenu.show();
  }

  action() {
    console.log('Any action here');
    this.bottomActionMenu.close();
    
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
        <Button style={styles.btn1}   onPress={()=>this.props.navigation.navigate('SignupScreen')}>
            <Text style={styles.txt1} >Join now</Text>
  </Button>
 
  <TouchableOpacity style={styles.btn2}   onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!')).then(()=>this.props.navigation.navigate('TabNavScreen'))}>
    <Image
    style={styles.tinyLogo2}
        source={require('../../assests/google-logo.png')}
    />
    <Text style={styles.txt2} >Join with Google</Text>
  </TouchableOpacity>
 
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
