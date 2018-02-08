import $ from 'jquery';

export const updateFirstName = (data) => {
  return {
    type: 'UPDATE_FIRST_NAME', 
    payload: {
      firstName: data
    }
  }
};

export const updateLastName = (data) => {
  return {
    type: 'UPDATE_LAST_NAME', 
    payload: {
      lastName: data
    }
  }
};

export const updatePhoneNumber = (data) => {
  return {
    type: 'UPDATE_PHONE_NUMBER', 
    payload: {
      phoneNumber: data
    }
  }
};

export const sendPostRequest = (data) =>  {
  var request = $.ajax({
    type: "POST",
    url: '/profile/form2',
    data: data,
    success: (success) => {
      console.log('data was successfully posted', success);
    },
    error: (error) => {
      console.log('following error occured while making post request to /login/form1', error);
    }
  });
  
  return {
    type: 'SEND_POST_RQUEST_FORM_TWO', 
    payload: request
  }
}



