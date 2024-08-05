import { FC } from 'react'
import LoginForm from '@features/auth/components/LoginForm'

const Login: FC = () => {
    return (
        <div className="flex flex-col">
            <h1 className="mx-auto mb-4 text-4xl">Login Page</h1>
            <LoginForm />
        </div>
    )
}

export default Login
