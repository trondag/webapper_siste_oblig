import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'
import FrontPage from './FrontPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import theStore from './redux/store'
import Registration from './registration/Registration';
import Login from './login/Login'
import CreatePoll from './polls/CreatePoll'
import Polls from './polls/Polls'
import AnswerPoll from './polls/AnswerPoll';

const store = createStore(theStore)

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <FrontPage/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
          <Route path="/createPoll">
            <CreatePoll/>
          </Route>
          <Route path="/polls">
            <Polls/>
          </Route>
          <Route path="/poll/:id">
            <AnswerPoll/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
