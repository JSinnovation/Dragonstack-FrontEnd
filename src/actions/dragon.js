import { DRAGON } from './types';
import { BACKEND } from '../config';
//we need double arrow syntax: one outer one to point to the call back and an inner one with a dispatch parameter for Redux to pass its dipatch function into the body of the fetchDragon function.

export const fetchDragon = () => dispatch => {
  dispatch({ type: DRAGON.FETCH });//DISPATCHING AN ACTION
  return fetch(`${BACKEND.ADDRESS}/dragon/new`) //template string using back ticks
    .then(response => response.json())
    .then(json => {
      if (json.type === 'error') {
        dispatch({ type: DRAGON.FETCH_ERROR, message: json.message });
      } else {
        dispatch({ type: DRAGON.FETCH_SUCCESS, dragon: json.dragon });//dragon payload with dragon key
      }
    })
    .catch(error => dispatch({ type: DRAGON.FETCH_ERROR, message: error.message }));//calling the dispatch function
};