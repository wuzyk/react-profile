export const changePassword = dispatch => {
  return fetch(`data/changePassword.json`)
    .then(response => response.json())
};