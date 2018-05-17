import {
  FETCH_FAV , ADD_FAV
}from "../Actions/Types"
import {AsyncStorage , Alert} from 'react-native'
const initialState = {
  todos : []
}

const TodoReducer = (state = initialState , action) =>{
  switch (action.type) {
    case FETCH_FAV:
      return {...state , todos : action.payload}
    case ADD_FAV :
    return {...state , todos : action.payload}
    default:
      return state

  }
}
export default TodoReducer;
