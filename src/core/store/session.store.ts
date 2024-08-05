import { BehaviorSubject } from 'rxjs'
import { injectable } from 'tsyringe'
import { User } from '@core/models/user.model'

@injectable()
export class SessionStore {
    private sessionSubject = new BehaviorSubject<User | null>(null)

    session$ = this.sessionSubject.asObservable()

    updateSession(user: User | null): void {
        this.sessionSubject.next(user)
    }
}

export default SessionStore
