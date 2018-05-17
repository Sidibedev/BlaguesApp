import React from 'react';
import { Container, Header, Item, H1, List, Input, Segment, ListItem, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider, Badge, Card, Title } from 'native-base'
import { Image, ListView, FlatList, StyleSheet, ScrollView, View, Alert, StatusBar, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { AppLoading, Asset, Font } from 'expo'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import axios from 'axios';
import Modal from 'react-native-modal'
//import Share, {ShareSheet} from 'react-native-share';
import { FontAwesome } from '@expo/vector-icons';
import { Share } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import FavListItem from '../Components/FavListItem'
import _ from 'lodash'

import { fetch } from '../redux/Actions/Actions'
import { connect } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import TodoReducer from '../redux/Reducers/Reducers'


class Favoris extends React.Component {


  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontsAreLoaded: true });
   }



  componentWillUpdate(nextProps) {
    if (nextProps.TodosFromAsync !== this.props.TodosFromAsync) {
      this.props.fetch()
    }
  }


  async componentDidMount() {
    //  AsyncStorage.removeItem('favoris')
      this.props.fetch()

  }


  _renderItem = ({ item }) => (
    <FavListItem blague={item.blague} categorie={item.categorie} />
  )

  renderBody() {
    if (_.values(this.props.TodosFromAsync.todos).length >= 1) {

      return (

        <FlatList
          keyExtractor={(item) => item.id}
          data={_.values(this.props.TodosFromAsync.todos).reverse()}
          renderItem={this._renderItem}/>


      )
    } else {

      return (

        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', marginTop: 30 }}>

          <Image source={require('../img/fav.png')} style={{ width: 250, height: 250, marginTop: 70 }} />

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: '400', color: "#233b6d" }}> Vous n'avez pas encore de favoris </Text>
        </View>

      )
    }
  }



  render() {

    return (


      <StyleProvider style={getTheme(platform)}>

        <Container style={{ backgroundColor: '#ecf0f1' }}>
          <Header>
            <Body>
              <Title style={{ color: 'white' }}>Mes favoris</Title>
            </Body>
         </Header>

          <View style={{ backgroundColor: 'white', flex: 1 }}>

                {this.renderBody()}

          </View>


        </Container>
      </StyleProvider>



    );
  }
}


const mapStateToProps = state => {
  return {
    TodosFromAsync: state
  }
}

const mapDispatchToProps = { fetch };

var styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
})

export default connect(mapStateToProps, { fetch })(Favoris)
