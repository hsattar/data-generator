import { render, screen } from '@testing-library/react'
import App from '../App'

test('should display the text hello in the app component', () => {
  
  render(<App />)
  const linkElement = screen.getByText(/hello/i)
  expect(linkElement).toBeInTheDocument()

})