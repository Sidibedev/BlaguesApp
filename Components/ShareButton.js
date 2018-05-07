/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Share
} from 'react-native';
import { Container,Spinner , Card, Header,Item , List ,Input ,CardItem, ListItem , Content , Footer, FooterTab, Button, Left , Right , Body,  Icon, Text , StyleProvider , Title } from 'native-base'



export default class ShareButton extends Component {

  constructor(props) {
    super(props)
    this.share = this.share.bind(this)
  }

  share = (blague , categorie) => () => {

    Share.share(
      {
      message:' '+blague +'. \n Categorie : '+ categorie +' \n via #MeilleuresBlaguesDuWeb',
      url: 'https://MeilleuresBlaguesDuWeb.firebaseapp.com',
      title: 'Les meilleures blagues du web'
      },
      {
      // Android only:
      dialogTitle: 'MeilleuresBlaguesDuWeb',
     // iOS only:
    excludedActivityTypes: [
    'com.apple.UIKit.activity.PostToTwitter'
      ]
    })

  }

  render() {
    return (
      <Button transparent onPress={this.share(this.props.blague , this.props.categorie)}>
                      <Icon active name="md-share" />

      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
