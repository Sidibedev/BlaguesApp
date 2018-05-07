import React, { Component } from 'react';
import {
  AppRegistry,    // Registers the app
  StatusBar,      // Allows to hide the satatus bar
} from 'react-native';
import Screens from './Screens';

export default class Onboarding extends Component {
  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }
  async componentWillMount() {
       await Expo.Font.loadAsync({
         'Roboto': require('native-base/Fonts/Roboto.ttf'),
         'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

       });
       this.setState({loading : false});


     }
  constructor(props) {
    this.state = {
      loading : true
    }
  }
  render() {
    if(this.state.loading) {
      return(
        <Expo.AppLoading />
      )
    }
    return (
      <Screens />
    );
  }
}

AppRegistry.registerComponent('Onboarding', () => Onboarding);
