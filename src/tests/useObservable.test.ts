import { renderHook, act } from '@testing-library/react'
import { Observable, Subscriber, Subscription } from 'rxjs'
import useObservable from '@hooks/useObservable'
import { describe, it, expect, vi } from 'vitest'

describe('useObservable', () => {
    it('return initial value', () => {
        const observable = new Observable<string>((subscriber) => {
            subscriber.next('initial value')
        })
        const { result } = renderHook(() =>
            useObservable(observable, 'default value')
        )
        expect(result.current).toBe('initial value')
    })

    it('update value when Observable is update', () => {
        let subscriber: Subscriber<string>
        const observable = new Observable<string>((sub) => {
            subscriber = sub
            sub.next('first value')
        })
        const { result } = renderHook(() =>
            useObservable(observable, 'default value')
        )

        expect(result.current).toBe('first value')

        act(() => {
            subscriber.next('second value')
        })

        expect(result.current).toBe('second value')
    })

    it('unsubscribe Observable when component unmount', () => {
        const unsubscribeMock = vi.fn()
        const subscription = new Subscription(unsubscribeMock)
        const observable = new Observable<string>(() => subscription)

        const { unmount } = renderHook(() =>
            useObservable(observable, 'default value')
        )

        act(() => {
            unmount()
        })

        expect(unsubscribeMock).toHaveBeenCalled()
    })
})
