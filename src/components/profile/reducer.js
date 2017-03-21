import { REQUEST_PROFILE, RECEIVE_PROFILE } from './actions';

const INITIAL_STATE = {
  fetching: false,
  data: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        ...state,
        fetching: true,
      };
    
    case RECEIVE_PROFILE:
      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
};