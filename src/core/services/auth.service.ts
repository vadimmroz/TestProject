import { BehaviorSubject } from 'rxjs'
import { injectable } from 'tsyringe'

interface User {
    id: string
    name: string
    token: string
}

@injectable()
export class AuthService {
    private userSubject = new BehaviorSubject<User | null>(null)
    user$ = this.userSubject.asObservable()

    login(username: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'password') {
                    const user: User = {
                        id: '1',
                        name: 'Admin User',
                        token: 'fake-jwt-token',
                    }
                    this.userSubject.next(user)
                    resolve()
                } else {
                    reject(new Error('Invalid credentials'))
                }
            }, 1000)
        })
    }

    logout(): void {
        this.userSubject.next(null)
    }
}

export default AuthService
