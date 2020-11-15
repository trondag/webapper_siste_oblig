const UserMockApi = {
  userFound: {
    "status": 200,
    "user": {
        "_id": "5fa3dc6ded2541f3fc39d941",
        "email": "troarng@outlook.com",
        "givenName": "Trond",
        "familyName": "Graabræk",
        "__v": 0
    },
    "message": "User found"
  },
  userNotFound: {
    "status": 404,
    "message": "User not found"
  }
}

export default UserMockApi