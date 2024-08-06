import { AuthService } from '@core/services/auth.service.ts'
import { container } from 'tsyringe'
import { useNavigate } from '@tanstack/react-router'

export const useAuth = () => {
    const authService = container.resolve(AuthService)
    const navigation = useNavigate()
    const login = (username: string, password: string) => {
        return authService.login(username, password).then(() => {
            authService.user$
                .subscribe(
                    (res) => res && localStorage.setItem('token', res.token)
                )
                .unsubscribe()
            navigation({ to: '/home' })
        })
    }
    const auth = (token: string) => {
        return authService.auth(token).then(() => {
            navigation({ to: '/home' })
        })
    }

    const logout = () => {
        authService.logout()
    }

    return {
        login,
        logout,
        auth,
    }
}
