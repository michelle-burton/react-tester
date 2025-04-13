/* eslint-env vitest */
import { render, screen, fireEvent } from '@testing-library/react'
import Greeting from './Greeting'
import { it } from 'vitest'

describe('Greeting component', () => {
    it('renders the Greet Me! button', () => {
        render(<Greeting />)
        expect(screen.getByText('Greet Me!')).toBeInTheDocument()
    })
    
    it('calls alert box with message when clicked', () => {
        const alertMock = vi.fn()
        global.alert = alertMock  // mock alert function

        render(<Greeting />)

        const button = screen.getByText('Greet Me!')
        fireEvent.click(button)

        expect(alertMock).toHaveBeenCalledWith('hello Michelle')
    })
})