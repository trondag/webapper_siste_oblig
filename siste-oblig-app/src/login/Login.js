import { useDispatch, useSelector } from 'react-redux'
import { errorToaster, successToaster } from '../services/global.service'
import { loginRequest } from '../services/http.service'

function Login(){

  const dispatch = useDispatch()

  const loggedInUser = useSelector(state => state.loggedInUser)

  if (!loggedInUser.email){
    return (
        <div class="container">
        <form>
          <div class="form-group" style={{maxWidth: '300px'}}>
            <label for="email-input">E-post</label>
            <input class="form-control" type="text" 
              name="email" 
              id="email-input">
            </input>
          </div>
          <button onClick={login} type="button" class="btn btn-primary mt-2">Logg inn</button>
        </form>
      </div>
    )
  } else {
    return (
      <div class="container">
        <p>Du er logget inn som {loggedInUser.email}</p>
      </div>
    )
  }


  async function login() {
    let email = document.querySelector('#email-input').value
    try {
      let userData = await loginRequest(email)
      if (userData.status === 200){
        dispatch({ type: 'USER_LOGON', userData})
        successToaster('Du er logget inn!')
        console.log('logget inn')

      }
    } catch (e) {
      console.log(e)
      if (e.status === 404){
        errorToaster('Bruker ikke funnet')
      }
      console.error(e)
        errorToaster('Noe gikk galt')
      
    }
  }
}
export default (Login)