import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import {test, expect} from "vitest"
import * as jest from "jest"

test('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

test('button click triggers onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
