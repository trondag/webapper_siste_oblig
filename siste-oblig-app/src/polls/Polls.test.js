import {setupServer} from 'msw/node'
import {rest} from 'msw'
import PollsMockApi from '../../tests/mockApi/polls'
import { render, screen, waitFor } from '@testing-library/react'
import Polls from './Polls'
import { BrowserRouter as Router} from 'react-router-dom'


test('Polls are rendered', async () => {

  const server = setupServer(
    rest.get('http://localhost:3001/polls', (req, res, ctx) => {
      return res(ctx.json(PollsMockApi.pollsFound))
    }),
  )
  server.listen()

  render( 
  <Router>
    <Polls/>
  </Router> );
  await waitFor(() => screen.getAllByText(/Hva er riktig navn på ost\?/i))
  expect(screen.getByText(/Hva er riktig navn på ost?/i)).toBeInTheDocument();
})