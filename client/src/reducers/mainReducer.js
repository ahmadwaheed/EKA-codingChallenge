export const mainReducer = (state, action) => {
  switch(action.type) {
    case "UPDATE_USER_NAME":
      return Object.assign({}, state, {userName: action.payload.userName})

    case "UPDATE_PASSWORD":
      return Object.assign({}, state, {password: action.payload.password})

    case "UPDATE_EMAIL":
      return Object.assign({}, state, {email: action.payload.email})

    case "UPDATE_FIRST_NAME":
      return Object.assign({}, state, {firstName: action.payload.firstName})

    case "UPDATE_LAST_NAME":
      return Object.assign({}, state, {lastName: action.payload.lastName})

    case "UPDATE_PHONE_NUMBER":
      return Object.assign({}, state, {phoneNumber: action.payload.phoneNumber})

     case "UPDATE_STREET_ADDRESS":
      return Object.assign({}, state, {streetAddress: action.payload.streetAddress})

    case "UPDATE_CITY":
      return Object.assign({}, state, {city: action.payload.city})

    case "UPDATE_STATE":
      return Object.assign({}, state, {state: action.payload.state})

    case "UPDATE_ZIP_CODE":
      return Object.assign({}, state, {zipCode: action.payload.zipCode})

    case "SEND_POST_RQUEST_FORM_ONE":
      return action.payload

    case "SEND_POST_RQUEST_FORM_TWO":
      return action.payload

    case "SEND_POST_RQUEST_FORM_THREE":
      return action.payload

    default:
      return state
  }
}


