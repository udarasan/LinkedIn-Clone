import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery:''
    };
  }

  onChangeSearch(query) {
    setSearchQuery(query);
}

  render() {
    return (
      <View style={styles.container}>
      <Image
      style={styles.img1}
      source={require('../../../assests/user.png')}
      />
      <Searchbar
      style={styles.searchbar}
      placeholder="Search"
      onChangeText={this.onChangeSearch}
      value={this.state.searchQuery}
      />
      <AwesomeIcon style={styles.icon1}  name="comment-dots" color={'#666666'} size={30} />
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
    img1:{
        marginTop:10,
        marginLeft:10,
        width:40,
        height:40
    },
    searchbar:{
        width:250,
        marginLeft:60,
        marginTop:-40
    },
    icon1:{
       marginLeft:323,
       marginTop:-40
    }
})
