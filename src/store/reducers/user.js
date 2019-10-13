import { LOGIN } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case LOGIN: {
      return action.payload;
    }
    default:
      return state;
  }
} 