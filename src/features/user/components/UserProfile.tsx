import { FC } from 'react'
import { useUser } from '../hooks/useUser.ts'
import UserEditProfile from '@features/user/components/UserEditProfile.tsx'
import Button from '@shared/components/Button.tsx'

const UserProfile: FC = () => {
    const { user, handleEditMode, editMode } = useUser()

    if (!user) return <div>Loading...</div>

    return (
        <div>
            {!editMode ? (
                <>
                    <h1>{user?.data?.name}'s Profile</h1>
                    <p>Email: {user?.data?.email}</p>
                </>
            ) : (
                <UserEditProfile handleEditMode={handleEditMode} />
            )}
            <Button onClick={handleEditMode}>
                {editMode ? 'Cancel' : 'Edit Profile'}
            </Button>
        </div>
    )
}

export default UserProfile
