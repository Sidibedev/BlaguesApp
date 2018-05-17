/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  Alert
} from 'react-native';
import {  Icon, Button} from 'native-base'
import _ from 'lodash'
// import store from '../redux/FavStore'

import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import TodoReducer from '../redux/Reducers/Reducers'
import {add} from '../redux/Actions/Actions'
import {connect} from 'react-redux';
import {AddFav} from '../redux/Actions/Actions'
import {FetchFav} from '../redux/Actions/Actions'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(TodoReducer)

 class FavButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fav : false ,
      items : {}
    }
    // binding


  }

  // Fonction qui verifie if la blague est deja presente en favoris
 

    componentDidMount() {

    }


  // Fonction qui permet d'ajouter une blague en favoris
  // addFav (blague , categorie) {
  //   const id = Date.now()
  //   let items = this.state.items
  //   const item = {
  //       blague : blague,
  //       categorie : categorie,
  //       id : id
  //   }
  //
  //
  //
  //       if (this.FavExist(items , blague)) { // Si la blague existe deja , on l'ajoute pas
  //       Alert.alert(
  //       'Favoris',
  //       'Oops , Cette blague est deja mise en favoris',
  //       [
  //
  //         {text: 'OK'},
  //       ],
  //       { cancelable: false }
  //       )
  //
  //
  //     }else { // Elle n'existe pas , on l'ajoute
  //         // items[id] = item
  //         // AsyncStorage.setItem('favoris', JSON.stringify(items))
  //         // .then(
  //         //   Alert.alert(
  //         // 'Favoris',
  //         // 'Bingo , la blague a été ajouté aux favoris',
  //         // [
  //         //
  //         //   {text: 'OK'},
  //         // ],
  //         // { cancelable: false }
  //         // )
  //         // )
  //
  //         store.dispatch({
  //           type : 'ADD_FAV',
  //           item,items
  //         })
  //       }
  //     }


    async favoris(blague , categorie) {
      const id = Date.now()
      const item = {
          blague : blague,
          categorie : categorie,
          id : id
      }
      let items = {}
    this.setState({fav : !this.state.fav})
    if (!this.state.fav) {
    try {
     const response = await AsyncStorage.getItem('favoris');
     if (response !== null){

       let items = JSON.parse(response)
       this.setState({ items })
       this.props.add(blague , categorie ,items)

     }else {



       items[id] = item
       AsyncStorage.setItem('favoris', JSON.stringify(items))
       .then(
         Alert.alert(
       'Favoris',
       'Bingo , la blague a été ajouté aux favoris',
       [

         {text: 'OK'},
       ],
       { cancelable: false }
       )
       )
       store.dispatch(AddFav(items))
      


     }
    } catch (error) {
     console.log('nothing found' +error);
    }




    }else {
      console.log('supprimé des favoris');
    }
  }





  render() {
    return (
      <Button transparent style={{marginLeft: 5 }} onPress={() => this.favoris(this.props.blague , this.props.categorie)}>
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
const mapStateToProps = state => {
  return {
    TodosFromAsync : state
  }
}

export default connect(mapStateToProps , {add} )(FavButton)
