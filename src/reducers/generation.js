import { GENERATION } from '../actions/types';
import fetchStates from './fetchStates';
import { fetchGeneration } from '../actions/generation';
const DEFAULT_GENERATION = { generationId: '', expiration: '' };

const generationReducer = (state=DEFAULT_GENERATION,action) => {
  switch (action.type) {
    case GENERATION.FETCH:
      return { ...state, status:fetchStates.fetching };
    case GENERATION.FETCH_ERROR:
      return { ...state, status:fetchStates.error, message: action.message };  //message key added to the state to see the error contained in action.message
    case GENERATION.FETCH_SUCCESS:
      return { ...state, status:fetchStates.success, ...action.generation };   //we want the new generation in the generation object
    default:
      return state; //current state
  }
 }

export default generationReducer;