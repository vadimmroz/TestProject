import { FC } from 'react'
import Input from '@shared/components/Input.tsx'
import Button from '@shared/components/Button.tsx'
import { useLoginForm } from '@features/auth/hooks/useLoginForm.ts'

const LoginForm: FC = () => {
    const { handleSubmit, handleInput, username, password } = useLoginForm()

    return (
        <form onSubmit={handleSubmit} className="max-w-sm w-full mx-auto">
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => handleInput(e, 'username')}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => handleInput(e, 'password')}
            />
            <Button type="submit">Login</Button>
        </form>
    )
}

export default LoginForm
