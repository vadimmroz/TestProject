import { ChangeEvent, FormEvent, useState } from 'react'
import { User } from '@core/models/user.model.ts'
import { userApi } from '@features/user/services/userApi.ts'

export default (handleEditMode: () => void) => {
    const [profileData, setProfileData] = useState<User>({
        email: '',
        id: '1',
        name: '',
        token: '',
    })

    const handleInput = (e: ChangeEvent<HTMLInputElement>, name: string) => {
        setProfileData((prev) => ({ ...prev, [name]: e.target.value }))
    }
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        userApi
            .putUser(profileData.id, profileData)
            .then(() => handleEditMode())
    }
    return { handleInput, handleSubmit, ...profileData }
}
