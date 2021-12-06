import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, FlatList, Alert } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth'

import firestore from '@react-native-firebase/firestore';


export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      profileImage: auth().currentUser.photoURL,
      data: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ]

    };
  }


  onChangeSearch(query) {
    setSearchQuery(query);
  }

  getPostsToFeed = async () => {
    firestore()
      .collection('Posts')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
      });

  }

  getListViewItem = (item) => {
    Alert.alert(item.key);
  }
  render() {
    const fireUser = auth().currentUser;
    console.log(fireUser);

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.img1}
          source={{ uri: this.state.profileImage }}
        />
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={this.onChangeSearch}
          value={this.state.searchQuery}
        />
        <AwesomeIcon style={styles.icon1} name="comment-dots" color={'#666666'} size={30} />

        <FlatList

          data={this.state.data}
          renderItem={({ item }) =>
            <Text style={styles.item}>{item.title}</Text>
            <Text style={styles.item}>{item.title}</Text>
            <Text style={styles.item}>{item.title}</Text>
          
          
          }
            

        />




      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E5DF',
    color: '#FEFEFE',
    // paddingTop: StatusBar.currentHeight,
  },
  view1: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    height: 270
  },
  img1: {
    marginTop: 10,
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 100
  },
  searchbar: {
    width: 250,
    height: 40,
    marginLeft: 60,
    marginTop: -40
  },
  icon1: {
    marginLeft: 323,
    marginTop: -40
  },
  txt1: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 17,
    color: '#202124',
    fontWeight: 'bold'
  },
  img2: {
    marginTop: 10,
    width: 250,
    height: 100,
    alignSelf: 'center'
  },
  txt2: {
    marginLeft: 19,
    marginRight: 10,
    marginTop: 20,
    fontSize: 15,
    color: '#202124',
  },
  btn1: {
    marginTop: 10,
    backgroundColor: '#0A66C2',
    width: 310,
    height: 40,
    alignSelf: 'center',
    borderRadius: 30
  },
  txt3: {
    fontSize: 17,
    color: 'white'
  },
})
