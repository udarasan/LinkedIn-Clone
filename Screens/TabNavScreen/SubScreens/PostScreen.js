import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Appbar, TextInput, Chip, List } from 'react-native-paper';
import { auth, firebase } from '@react-native-firebase/auth';
import { useRoute } from '@react-navigation/core';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './HomeScreen';
const _handleMore = () => console.log('Shown more');
const MORE_ICON = Platform.OS === 'android' ? 'dots-horizontal' : 'dots-vertical';



export default class PostScreen extends Component {
  constructor(props) {

    super(props);
    this.state = {
      fileURL: '',
      caption: ''

    };
  }
  saveRecordInFireStore = (url) => {
    console.log("udara");
    firestore()
      .collection('Posts')
      .add({
        userID: this.props.route.params.uid,
        userProfilURL:this.props.route.params.userImage,
        userName:this.props.route.params.displayName,
        caption: this.state.caption,
        fileURL: url,
        creation: firestore.FieldValue.serverTimestamp(),
      }).then(() => {
        console.log('User added!');
      });

  }
  // saveRecordInFireStore=(url)=>{
  //   console.log("udara");
  //   firestore()
  //   .collection('Users')
  //   .doc(this.props.route.params.uid)
  //   .collection("Usersposts")
  //   .add({
  //     caption: this.state.caption,
  //     fileURL: url,
  //     creation: firestore.FieldValue.serverTimestamp(),
  //   }).then(() => {
  //     console.log('User added!');
  //   });

  // }
  getImageFromGalery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      this.setState({
        imagePath: image.path,
        imageName: image.modificationDate
      })
    });
  }
  getVideoFromGalery = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(video);
      this.setState({
        videoPath: video.path,
        videoName: video.modificationDate
      })
    });
  }
  openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({
        imagePath: image.path,
        imageName: image.modificationDate
      })
    });
  }
  uploadImage = async () => {
    // create bucket storage reference to not yet existing image


    console.log(this.state.imagePath);
    console.log(this.state.imageName);
    console.log(this.state.videoPath);
    console.log(this.state.videoName);



    if (this.state.imagePath == undefined) {
      const reference = storage().ref(`postVideos/${this.state.videoName}`);
      await reference.putFile(this.state.videoPath);
      console.log(this.state.videoName);
      const videoUrl = await storage().ref(`postVideos/${this.state.videoName}`).getDownloadURL();
      console.log(videoUrl);
      this.setState = ({
        fileURL: videoUrl,
      })
      this.saveRecordInFireStore(videoUrl);
      this.props.navigation.navigate('HomeScreen')

    } else {
      const reference = storage().ref(`postImages/${this.state.imageName}`);
      await reference.putFile(this.state.imagePath);
      const imageUrl = await storage().ref(`postImages/${this.state.imageName}`).getDownloadURL();
      console.log(imageUrl);
      this.setState = ({
        fileURL: imageUrl,
      })
      this.saveRecordInFireStore(imageUrl);
      this.props.navigation.navigate('HomeScreen')

    }



  }




  render() {


    return (

      <SafeAreaView>
        <View>
          <Appbar.Header style={styles.header}>
            <Appbar.Action icon="close" style={styles.BackAction} onPress={() => this.props.navigation.goBack(null)} />
            <Appbar.Content title="Share Post" />
            <Appbar.Action icon="send" onPress={this.uploadImage} />
          </Appbar.Header>

          <Image style={styles.profileImage}
            source={{ uri: this.props.route.params.userImage }} />

          <ScrollView>
            <TextInput
              style={styles.Txtinput}
              label="What do you want to talk about?"
              multiline={true}
              numberOfLines={4}

              onChangeText={(text) => this.setState({ caption: text })}
              value={this.state.text} />
            <Image style={styles.postImage}
              source={{ uri: this.state.imagePath }} />
          </ScrollView>
        </View>

        <Appbar style={styles.bottom}>
          <Appbar.Action icon="camera" onPress={this.openCamera} />
          <Appbar.Action icon="video" onPress={this.getVideoFromGalery} />
          <Appbar.Action icon="image" onPress={this.getImageFromGalery} />
          <Appbar.Action icon={MORE_ICON} onPress={() => console.log('Pressed delete')} />
        </Appbar>

      </SafeAreaView>





    );
  }
}


const styles = StyleSheet.create({
  BackAction: {
  },
  Txtinput: {


  },
  root: {

  },
  bottom: {
    bottom: 0,
    backgroundColor: 'white'

  },
  header: {
    backgroundColor: 'white'
  },
  profileImage: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 100

  },
  postImage: {
    height: 300,
    width: 360
  }
})

