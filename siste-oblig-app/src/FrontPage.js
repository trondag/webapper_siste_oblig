import { useHistory } from "react-router-dom";

function FrontPage() {

  let history = useHistory()

  return (
    <main>
        <div onClick={navigateToPollCreation} id="create-poll-banner">
          Lag poll
        </div>
        <div onClick={navigateToPolls} id="answer-poll-banner">
          Svar på en poll
        </div>
      </main>
  );

  function navigateToPollCreation(){
    history.push('/createPoll')
  }

  function navigateToPolls(){
    history.push('/polls')
  }
}

export default FrontPage