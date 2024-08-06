import { afterAll, describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from '@shared/components/Button.tsx'

describe('IncreaseButton', () => {
    const consoleMock = vi
        .spyOn(console, 'log')
        .mockImplementation(() => undefined)
    afterAll(() => {
        consoleMock.mockReset()
    })
    test('renders', () => {
        render(<Button>Click Me</Button>)
        expect(screen.getByText('Click Me')).toBeDefined()
    })

    test('handler on button', () => {
        const handleClick = () => {
            console.log(1)
        }
        render(<Button onClick={handleClick}>Handle Click</Button>)
        const btn = screen.getByText('Handle Click')
        fireEvent.click(btn)

        expect(consoleMock).toHaveBeenCalledOnce()
        expect(consoleMock).toHaveBeenLastCalledWith(1)
    })
})
