import {
  Link
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import UserInfo from './user/UserInfo'

function Nav() {

  const dispatch = useDispatch()

  const loggedInUser = useSelector(state => state.loggedInUser)

  if (loggedInUser.email){
    return (
      <nav>
        <Link to="/">
          <h1>Polls</h1>
        </Link>
        <div class="buttons">
        <Link to="/login" onClick={logOut}><button>Logg ut</button></Link>
        <UserInfo/>
        </div>
      </nav>
    )
  } else {
    return (
      <Link to="/">
        <nav>
          <h1>Polls</h1>
          <div class="buttons">
          <Link to="/login"><button>Logg inn</button></Link>
          <Link to="/register"><button>Registrer deg</button></Link>
          </div>
        </nav>
      </Link>
    );
  }

  function logOut(){
    dispatch({type: 'USER_LOGOUT'})
  }
}

export default Nav