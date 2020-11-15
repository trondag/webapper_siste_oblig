import { useSelector } from 'react-redux'

function UserInfo(){
  
  const loggedInUser = useSelector(state => state.loggedInUser)

  if (loggedInUser){
    return (
      <div class="card" style={{height: '50px'}}>
        <div class="">{loggedInUser.email}</div>
        <div class="text-muted">{loggedInUser.givenName + ' ' + loggedInUser.familyName}</div>
      </div>
    )
  }
}

export default UserInfo