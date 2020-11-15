import { render, screen, fireEvent } from '@testing-library/react';
import FrontPage from './FrontPage';
import { BrowserRouter as Router} from 'react-router-dom'

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

test('renders create-poll banner and answer-poll banner', () => {
  render(<FrontPage />);
  const createPollElement = screen.getByText(/Lag poll/i);
  const answerPollElement = screen.getByText(/Svar på en poll/i);
  expect(createPollElement).toBeInTheDocument();
  expect(answerPollElement).toBeInTheDocument();
})

test('click on create-poll sends user to correct url', () => {
  render(
    <Router>
      <FrontPage />
    </Router>);
  fireEvent.click(screen.getByText(/Lag poll/i))
  expect(mockHistoryPush).toHaveBeenCalledWith('/createPoll')
})

test('click on answer-poll sends user to correct url', () => {
  render(
    <Router>
      <FrontPage />
    </Router>);
  fireEvent.click(screen.getByText(/Svar på en poll/i))
  expect(mockHistoryPush).toHaveBeenCalledWith('/polls')
})