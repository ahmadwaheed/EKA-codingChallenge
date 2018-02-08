import $ from 'jquery';

export const updateStreetAddress = (data) => {
  return {
    type: 'UPDATE_STREET_ADDRESS', 
    payload: {
      streetAddress: data
    }
  }
};

export const updateCity = (data) => {
  return {
    type: 'UPDATE_CITY', 
    payload: {
      city: data
    }
  }
};

export const updateState = (data) => {
  return {
    type: 'UPDATE_STATE', 
    payload: {
      state: data
    }
  }
};

export const updateZipCode = (data) => {
  return {
    type: 'UPDATE_ZIP_CODE', 
    payload: {
      zipCode: data
    }
  }
};

export const sendPostRequest = (data) =>  {
  var request = $.ajax({
    type: "POST",
    url: '/profile/form3',
    data: data,
    success: (success) => {
      console.log('data was successfully posted', success);
    },
    error: (error) => {
      console.log('following error occured while making post request to /login/form1', error);
   }
  });
  
  return {
    type: 'SEND_POST_RQUEST_FORM_THREE', 
    payload: request
  }
}

