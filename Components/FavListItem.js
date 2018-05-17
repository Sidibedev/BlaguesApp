/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import {Card , Button , Icon} from 'native-base';
import ElevatedView from 'react-native-elevated-view'
import ShareButton from '../Components/ShareButton'
import FavButton from '../Components/FavButton'

export default class FavListItem extends Component {
  async removeFav() {
    try {
     await AsyncStorage.removeItem('favoris');
     return true;
   }
   catch(exception) {
     return false;
   }
  }
  render() {
    return (
      <ElevatedView elevation={10} style={styles.stayElevated} >

                <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                      {this.props.blague}
                </Text>

                  <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>{this.props.categorie} </Text>

                 <View style={{flexDirection: 'row' , marginTop: 5}}>

                  <ShareButton blague={this.props.blague} categorie={this.props.categorie} />
{/*
                  <Button transparent style={{marginLeft: 5}} onPress={this.removeFav}>
                          <Icon  active name="md-trash" />
                  </Button> */}

                </View>
      </ElevatedView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

    stayElevated: {
         alignItems:'center',
         justifyContent: 'center',
         flex: 1,
         alignSelf: 'center',
         width: '90%',
         height: '30%',
        margin: 10,
         backgroundColor: 'white',
         shadowColor: '#cccccc',
         shadowOffset: {
           width: 0,
           height: 7
         },
         shadowRadius: 10,
         shadowOpacity: 2.0
       },
});
