import { render, screen } from '@testing-library/react';
import App from './App'

test('renders frontpage', () => {
  render(<App />)
  expect(screen.getByText(/Lag poll/i)).toBeInTheDocument()
})
/*
test('renders frontpage on route "/login"', () => {
  const history = createMemoryHistory()
  history.push('/login')
  render(
    <Router initialEntries={['/login']}>
      <App />
    </Router>
  )
  expect(screen.getByLabelText(/Logg inn/i)).toBeInTheDocument()
})

test('renders frontpage on route "/register"', () => {
  const history = createMemoryHistory()
  history.push('/')
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(screen.getByText(/Lag poll/i)).toBeInTheDocument()
})

test('renders frontpage on route "/createPoll"', () => {
  const history = createMemoryHistory()
  history.push('/')
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(screen.getByText(/Lag poll/i)).toBeInTheDocument()
})

test('renders frontpage on route "/polls"', () => {
  const history = createMemoryHistory()
  history.push('/')
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(screen.getByText(/Lag poll/i)).toBeInTheDocument()
})
*/