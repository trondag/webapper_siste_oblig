import { useState } from 'react'
import { useSelector } from 'react-redux'
import { errorToaster, successToaster } from '../services/global.service'
import { createPollRequest } from '../services/http.service'

function CreatePoll(){

  const [options, setOptions] = useState([])

  const loggedInUser = useSelector(state => state.loggedInUser)

  if (!loggedInUser.email){
    return (
      <p>Du må være innlogget for å lage poll</p>
    )
  }

  return (
    <div class="container">
      <h1>Lag en poll</h1>
      <form>
        <div class="form-group" style={{maxWidth: '300px'}}>
          <label>Navn på poll</label>
          <input class="form-control" id="poll-title"></input>
        </div>
        <div class="form-group" style={{maxWidth: '300px'}}>
          <label>Spørsmål</label>
          <input class="form-control" id="poll-question"></input>
        </div>
        <div>
          <p>Svaralternativer
            <button class="btn btn-success" style={{margin: '10px'}} type="button" onClick={addOption}>+</button>
            <button class="btn btn-danger" style={{margin: '10px'}} type="button" onClick={removeOption}>-</button></p>
        </div>
        <div>
          <AnswerOptions/>
        </div>
        <SubmitButton/>
      </form>
    </div>
  )

  function AnswerOptions(){
    let optionInputs = []
    if (options && options.length > 0){
      for (let i = 0; i < options.length; i++){
        optionInputs.push(
          <div class="form-group">
            <label>Svaralternativ {i}</label>
            <input 
            style={{maxWidth: '300px'}} 
            class="form-control"
            onChange={handleOptChange}
            defaultValue={options[i]}
            dataKey={i}
            ></input>
          </div>
        )
      }
      return optionInputs
    } else {
      return (<p>Legg til et svaralternativ</p>)
    }
  }

  function SubmitButton(){
    if (options.length >= 2){
      return <button type="button" class="btn btn-primary" onClick={submitPollCreation}>Send inn</button>
    } else {
      return <p>Du må lage minst to svaralternativer</p>
    }
  }

  function addOption(){
    setOptions([...options, ''])
  }

  function removeOption(){
    if (options.length > 0){
      let tempOptions = options
      tempOptions.splice(tempOptions.length-1, 1)
      setOptions([...tempOptions])
    }
  }

  function handleOptChange(evt){
    let index = parseInt(evt.target.attributes.dataKey.value)
    options[index] = evt.target.value
    setOptions(options)
  }

  async function submitPollCreation(){
    let payload = {
      name: document.querySelector('#poll-title').value,
      question: document.querySelector('#poll-question').value,
      creator: loggedInUser.email,
      answerOptions: options
    }
    if (!payload.name) {
      errorToaster('Du må fylle ut et navn!')
      return
    } else if (!payload.question){
      errorToaster('Du må fylle ut et spørsmål!')
      return
    } else if (payload.answerOptions.length <= 1){
      console.log(payload.answerOptions.length)
      errorToaster('Du må fylle ut minst to spørsmål!')
      return
    }

    try {
      let res = await createPollRequest(payload)
      console.log(res)
      successToaster('Poll opprettet!')
    } catch (e){
      errorToaster('Noe gikk galt')
      console.error(e)
    }
  }
}


export default CreatePoll