import { registerUser } from "../services/http.service"
import toastr from 'toastr'

function Registration(){
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
        <div class="form-group" style={{maxWidth: '300px'}}>
          <label>Fornavn</label>
          <input class="form-control" type="text" 
            name="givenName" 
            id="given-name-input">
          </input>
        </div>
        <div class="form-group" style={{maxWidth: '300px'}}>
          <label>Etternavn</label>
          <input class="form-control" type="text" 
            name="familyName"
            id="family-name-input">
          </input>
        </div>
        <button onClick={register} type="button" class="btn btn-primary mt-2">Registrer deg!</button>
      </form>
    </div>
  )

  async function register(){
    let payload = {
      email: document.querySelector('#email-input').value,
      givenName: document.querySelector('#given-name-input').value,
      familyName: document.querySelector('#family-name-input').value
    }
    try {
      await registerUser(payload)
      toastr.success('Brukerkonto opprettet!')
      setTimeout(() => {
        window.location.href = 'http://localhost:3000/login'
      }, 500)
    } catch (e) {
      console.error(e)
      toastr.error('Noe gikk galt')
      
    }
  }
}

export default Registration