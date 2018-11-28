import { GENERATION_ACTION_TYPE } from '../actions/types';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };

export const generationReducer = (state,action) => {
  /* console.log('generationReducer state', state);
  console.log('generationReducer action', action); */

  if (action.type === GENERATION_ACTION_TYPE) {
    return { generation: action.generation };
  }
      return { generation: DEFAULT_GENERATION };//return object with generation key
 }
