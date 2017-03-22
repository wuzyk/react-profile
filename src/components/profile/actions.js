export const REQUEST_RROFILE = 'REQUEST_RROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const INIT_SAVE_PROFILE = 'INIT_SAVE_PROFILE';
export const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';
export const SAVE_PROFILE_FAILURE = 'SAVE_PROFILE_FAILURE';

const requestProfile = {
  type: REQUEST_RROFILE,
};

const receiveProfile = (data) => ({
  type: RECEIVE_PROFILE,
  data,
});

const initSaveProfile = {
  type: INIT_SAVE_PROFILE,
}

const saveProfileSuccess = data => ({
  type: SAVE_PROFILE_SUCCESS,
  data,
});

const saveProfileFailure = data => ({
  type: SAVE_PROFILE_FAILURE,
  data,
});

export const fetchProfile = dispatch => {
  dispatch(requestProfile);
  return fetch(`data/profile.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveProfile(json)));
};

export const saveProfile = data => dispatch => {
  dispatch(initSaveProfile);
  return fetch(`data/profile.json`)
    .then(response => response.json())
    .then(
      json => dispatch(saveProfileSuccess(json)),
      json => dispatch(saveProfileFailure(json))
    );
};