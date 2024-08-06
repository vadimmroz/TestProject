import { renderHook, act } from '@testing-library/react'
import { ChangeEvent, FormEvent } from 'react'
import { vi, describe, expect, it } from 'vitest'
import { useLoginForm } from '@features/auth/hooks/useLoginForm'
const mockLogin = vi.fn().mockResolvedValueOnce(undefined)
const mockAuth = vi.fn().mockResolvedValueOnce(undefined)

vi.mock('@features/auth/hooks/useAuth.ts', () => ({
    useAuth: () => ({
        login: mockLogin,
        auth: mockAuth,
    }),
}))

describe('useLoginForm', () => {
    it('should update formData on handleInput', () => {
        const { result } = renderHook(() => useLoginForm())

        expect(result.current.username).toBe('')
        expect(result.current.password).toBe('')

        act(() => {
            const usernameEvent = {
                target: { value: 'testuser' },
            } as ChangeEvent<HTMLInputElement>
            const passwordEvent = {
                target: { value: 'password123' },
            } as ChangeEvent<HTMLInputElement>

            result.current.handleInput(usernameEvent, 'username')
            result.current.handleInput(passwordEvent, 'password')
        })

        expect(result.current.username).toBe('testuser')
        expect(result.current.password).toBe('password123')
    })

    it('should call login on handleSubmit', async () => {
        const { result } = renderHook(() => useLoginForm())

        act(() => {
            const usernameEvent = {
                target: { value: 'testuser' },
            } as ChangeEvent<HTMLInputElement>
            const passwordEvent = {
                target: { value: 'password123' },
            } as ChangeEvent<HTMLInputElement>

            result.current.handleInput(usernameEvent, 'username')
            result.current.handleInput(passwordEvent, 'password')
        })

        await act(async () => {
            const formEvent = { preventDefault: () => {} } as FormEvent
            await result.current.handleSubmit(formEvent)
        })

        expect(mockLogin).toHaveBeenCalled()
        expect(mockLogin).toHaveBeenCalledWith('testuser', 'password123')
    })
})
