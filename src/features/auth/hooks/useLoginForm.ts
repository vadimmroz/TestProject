import { ChangeEvent, FormEvent, useState } from 'react'
import { useAuth } from '@features/auth/hooks/useAuth.ts'

export const useLoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const { login } = useAuth()
    const handleInput = (
        e: ChangeEvent<HTMLInputElement>,
        name: 'username' | 'password'
    ) => {
        setFormData((prev) => ({ ...prev, [name]: e.target.value }))
    }
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        await login(formData.username, formData.password)
    }
    return { handleInput, handleSubmit, ...formData }
}
