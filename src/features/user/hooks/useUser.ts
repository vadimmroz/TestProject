import { useState } from 'react'
import { userApi } from '../services/userApi'
import { User } from '@core/models/user.model.ts'
import { useQuery } from 'react-query'

export const useUser = () => {
    const [editMode, setEditMode] = useState(false)
    const user = useQuery<User>([editMode, 'userProfile'], () =>
        userApi.getUser('1')
    )
    const handleEditMode = () => {
        setEditMode(!editMode)
    }

    return { user, editMode, handleEditMode }
}
