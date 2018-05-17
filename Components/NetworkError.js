/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class NetworkError extends Component {
  render() {
    if (this.props.hide === true) {

      return null

    }


      return (
        <View style={{ alignItems:'center' , flex : 1 , justifyContent: 'center' , marginTop: 50}}>



                       <Image  source={require('../img/nointernet.png')} style={{width : 200 , height : 200 , marginTop: 70}}/>

                     <Text style={{marginTop: 10 ,fontSize: 18, fontWeight: '400', color: "grey"}}> Aucune Connexion internet</Text>
                   <Text style={{marginTop: 5 ,fontSize: 13, fontWeight: '400', color: "grey"}}> {this.props.content}</Text>





        </View>
      )



  }
}
