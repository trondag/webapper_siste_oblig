import { useEffect, useState } from 'react'
import { errorToaster } from '../services/global.service'
import { getPollsRequest } from '../services/http.service'
import { Link } from 'react-router-dom'


function Polls(){

  const [polls, setPolls] = useState([])

  useEffect(() => {
    getPollsRequest()
    .then(res => setPolls(res.data.polls))
    .catch(e => {console.log(e); errorToaster('Noe gikk galt')})
  },[]) 

  const listItems = polls.map((poll) => 
    <tr>
      <td><Link to={{ pathname: `/poll/${poll._id}` }}>{poll.name}</Link></td>
      <td>{poll.creator}</td>
    </tr>
  )
  return (
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Navn</th>
            <th>Opprettet av</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
    </div>
  )
}

export default Polls