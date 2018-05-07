/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,


} from 'react-native';
import {  Icon, Button} from 'native-base'

export default class FavButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fav : false
    }
    this.favoris = this.favoris.bind(this)


  }

   favoris = (value) => () => {
    this.setState({fav : !this.state.fav})
    if (!this.state.fav) {
    console.log('ajouté aux favoris')

    }else {
      console.log('supprimé des favoris');
    }
  }





  render() {
    return (
      <Button transparent style={{marginLeft: 5 }} onPress={this.favoris(this.props.blague)}>
                      <Icon active name={this.state.fav ? 'heart' : 'md-heart-outline'}/>

      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
