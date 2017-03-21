export const REQUEST_RROFILE = 'REQUEST_RROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const requestProfile = {
  type: REQUEST_RROFILE,
};

export const receiveProfile = (data) => ({
  type: RECEIVE_PROFILE,
  data,
});

export const fetchProfile = dispatch => {
  dispatch(requestProfile);
  return fetch(`data/profile.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveProfile(json)));
};