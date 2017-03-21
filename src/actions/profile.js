export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_RECEIVE = 'PROFILE_RECEIVE';

export const requestProfile = {
  type: PROFILE_REQUEST
}

export const receiveProfile = (data) => ({
  type: PROFILE_RECEIVE,
  data
});

export const fetchProfile = reddit => dispatch => {
  dispatch(requestProfile)
  return fetch(`../../data/profile.json`)
    .then(response => response.json())
    .then(data => dispatch(receiveProfile(data)))
}