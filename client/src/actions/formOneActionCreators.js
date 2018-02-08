import $ from 'jquery';

export const updateUserName = (data) => {
  return {
    type: 'UPDATE_USER_NAME', 
    payload: {
      userName: data
    }
  }
};

export const updatePassword = (data) => {
  return {
    type: 'UPDATE_PASSWORD', 
    payload: {
      password: data
    }
  }
};

export const updateEmail = (data) => {
  return {
    type: 'UPDATE_EMAIL', 
    payload: {
      email: data
    }
  }
};


export const sendPostRequest = (data) =>  {
  var request = $.ajax({
    type: "POST",
    url: '/login/form1',
    data: data,
    success: (success) => {
      console.log('data was successfully posted', success);
    },
    error: (error) => {
      console.log('following error occured while making post request to /login/form1', error);
    }
  });
  return {
    type: 'SEND_POST_RQUEST_FORM_ONE', 
    payload: request
  }
}