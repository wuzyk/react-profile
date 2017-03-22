import { REQUEST_PROFILE, RECEIVE_PROFILE, INIT_SAVE_PROFILE, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAILURE } from './actions';

const INITIAL_STATE = {
  fetching: false,
  saving: false,
  error: null,
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
        fetching: false,
        data: {
          ...action.data
        }
      };

    case INIT_SAVE_PROFILE:
      return {
        ...state,
        saving: true,
      }

    case SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        saving: false,
        data: {
          ...action.data
        },
      }

    case SAVE_PROFILE_FAILURE:
      return {
        ...state,
        saving: false,
        data: {
          ...action.data
        },
      }

    default:
      return state;
  }
};