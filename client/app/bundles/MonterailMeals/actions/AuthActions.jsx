import { AUTH_REQUEST, AUTH_RESPONSE } from '../constants/constants';


export function authRequested(result) {
  return {
    type: AUTH_REQUEST,
    name: result.nickname
  }
}

export function githubAuth() {
  return  function (dispatch, getState) {
    let url = "/auth/github"

    $.ajax({
      url : url,
      type : 'GET',
      contentType: 'text/plain',
      xhrFields: { withCredentials: false },
      success : function(data, status, xhr) {
        dispatch(authRequested(data.json()));
      },
      error : function(xhr, data) {
        window.alert("There's an error with invoices loading for this scenario. Please try again later");
      }
    });
  }
}
