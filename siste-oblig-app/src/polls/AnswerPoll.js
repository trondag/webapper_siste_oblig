import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { errorToaster } from './../services/global.service'
import { getPollRequest } from '../services/http.service'

function AnswerPoll(){

  let { id } = useParams()

  const [poll, setPoll] = useState([])

  useEffect(() => {
    getPollRequest(id)
    .then(res => {setPoll(res.data.poll); console.log(poll);})
    .catch(e => {console.error(e); errorToaster('Noe gikk galt')})
  },[]) 

  let questions;
  if (poll.answerOptions && poll.answerOptions.length > 0){
    questions = poll.answerOptions.map((answerOption) => 
      <div className="form-check">
      <input 
      className="form-check-input" 
      type="radio"
      id={{answerOption}} 
      value={{answerOption}}
      name="pollOptions"/>
      <label class="form-check-label" for={{answerOption}}>
        {answerOption}
      </label>
    </div>
    )
  } else {
    questions = <p></p>
  }

  return (
    <div className="container">
      <h1>{poll.name}</h1>
      <h3>{poll.question}</h3>
      {questions}
      <button type="button" className="btn btn-success">Svar på poll</button>
    </div>
  )
}

export default AnswerPoll