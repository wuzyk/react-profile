const INITIAL_STATE = {
  data: {},
  fetching: false,
};

const profile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return Object.assign({}, state, {
        fetcing: true
      });

    case 'PROFILE_RECEIVE':
      return Object.assign({}, state, {
        data: action.data,
        fetcing: false
      });

    case 'SAVE_PROFILE':
      return Object.assign({}, state);

    default:
      return state
  }
};

export default profile;