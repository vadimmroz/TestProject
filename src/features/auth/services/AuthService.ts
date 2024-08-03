import { singleton } from 'tsyringe';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
    id: number;
    username: string;
    email: string;
}

@singleton()
export class AuthService {
    private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

        async login(username: string, password: string): Promise<void> {
            console.log(username, password);
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        this.currentUserSubject.next(user);
    }

    logout(): void {
        this.currentUserSubject.next(null);
    }

    getCurrentUser(): Observable<User | null> {
        return this.currentUserSubject.asObservable();
    }
}
