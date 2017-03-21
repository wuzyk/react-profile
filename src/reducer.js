import { combineReducers } from 'redux';

import profile from './components/profile/reducer';

const reducer = combineReducers({
  profile,
});

export default reducer;
