import Input from '@shared/components/Input.tsx'
import Button from '@shared/components/Button.tsx'
import useUserEditProfile from '@features/user/hooks/useUserEditProfile.ts'

const UserEditProfile = ({
    handleEditMode,
}: {
    handleEditMode: () => void
}) => {
    const { email, handleInput, handleSubmit, name } =
        useUserEditProfile(handleEditMode)
    return (
        <form onSubmit={handleSubmit} className="max-w-sm w-full mx-auto">
            <Input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => handleInput(e, 'email')}
            />
            <Input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => handleInput(e, 'name')}
            />
            <Button type="submit">Edit</Button>
        </form>
    )
}

export default UserEditProfile
