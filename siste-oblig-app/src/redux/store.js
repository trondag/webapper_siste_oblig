let store = (state = {
  loggedInUser: {
    email: '',
    givenName: '',
    familyName: ''
  }
}, action) => {
  switch (action.type) {
    case 'USER_LOGON': return {
      loggedInUser: action.userData.user
    }
    case 'USER_LOGOUT': return {
      loggedInUser: ''
    }
    default:
      return state
  }
}

export default store