export const changePassword = (oldPassword, newPassword) => dispatch => {
  return fetch(`/api/auth/password/change/`, { 
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRFToken': 'T8FIijrxiktuhPt0x8JTCgn7vQMZpTX0AjTRAPyqgC73J3P15ls6qBQjzhlM5FOR'
    }),
    body: JSON.stringify({
      new_password2: newPassword,
      new_password1: newPassword,
      old_password: oldPassword
    })
  })
  .then(response => response.json())
};