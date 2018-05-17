
import {
  FETCH_FAV , ADD_FAV
}from "./Types"
import {AsyncStorage , Alert} from 'react-native'

export const FetchFav = todos => ({
 type : FETCH_FAV,
 payload : todos
})

export const AddFav = todos => ({
  type : ADD_FAV,
  payload : todos
})

export const fetch = () => {
  return async dispatch => {
    try {
          let response = await AsyncStorage.getItem('favoris');
          if (response !== null){
          dispatch(FetchFav(JSON.parse(response)))
          }
        } catch (error) {
          console.log('riennn');
    }
  }
}

export const add = (blague , categorie , items) => {
  return async dispatch => {


    const id = Date.now()
    const item = {
        blague : blague,
        categorie : categorie,
        id : id
    }



    



                  if (this.FavExist(items , blague)) { // Si la blague existe deja , on l'ajoute pas
                  Alert.alert(
                  'Favoris',
                  'Oops , Cette blague est deja mise en favoris',
                  [

                    {text: 'OK'},
                  ],
                  { cancelable: false }
                  )


                }else {

                 items [id] = item

                  AsyncStorage.setItem('favoris', JSON.stringify(items))
                  .then(
                    Alert.alert(
                  'Favoris',
                  'Bingo , la blague a été ajouté aux favoris ici',
                  [

                    {text: 'OK'},
                  ],
                  { cancelable: false }
                  )
                  )

                    dispatch(AddFav(items))
                    dispatch(FetchFav(items))

                  }



    }



    }









FavExist = (object , value) => {
    let exist = false
    if (object !== null) {

      Object.keys(object).map(item => {
        if (object[item].blague == value) {
          exist = true
        }
      })

    }


    return exist;
  }
