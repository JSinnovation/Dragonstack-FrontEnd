import {
  DRAGON
} from '../actions/types';
import fetchStates from './fetchStates';
import {
  fetchDragon
} from '../actions/dragon';
const DEFAULT_DRAGON = {
  generationId: '',
  dragonId: '',
  nickname: '',
  birthdate: '',
  traits: []
};

const dragon = (state = DEFAULT_DRAGON, action) => { //state argument if not defined becomes the DEFAULT_DRAGON
  //second paramenter pass the action that is dispatched to redux, which  allows us to switch on the action type
  switch (action.type) {
    case DRAGON.FETCH:
      return { ...state, status: fetchStates.fetching }
    case DRAGON.FETCH_ERROR:
      return { ...state, status: fetchStates.error, message: action.message };
    case DRAGON.FETCH_SUCCESS:
      return { ...state, status: fetchStates.success, ...action.dragon };
      //with spread '...' operator all of its keys and values get copied over into the state object for this dragon reducer
    default://for action types not relevant to this dragon reducer return the state
      return state;
  };
};
  
export default dragon;
