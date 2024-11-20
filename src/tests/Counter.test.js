// import necessary react testing library helpers here
// import the Counter component here

const { render, screen } = require('@testing-library/react')
const { default: Counter } = require('../components/Counter')
const { default: userEvent } = require('@testing-library/user-event')

const getCounterValue = () => {
  return screen.getByTestId('count').textContent
}

beforeEach(() => {
  // Render the Counter component here
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Counter></Counter>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByRole('heading')).toHaveTextContent('Counter')
})

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(getCounterValue()).toBe('0')
})

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(await screen.findByText('+'))
  expect(getCounterValue()).toBe('1')
})

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above

  userEvent.click(await screen.findByText('-'))
  expect(getCounterValue()).toBe('-1')
})
