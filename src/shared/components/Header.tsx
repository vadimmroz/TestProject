import { Link } from '@tanstack/react-router'

const Header = () => {
    return (
        <header className="flex justify-center mx-auto gap-6 my-4">
            <Link
                className="text-2xl hover:text-blue-400 transition"
                to="/login"
            >
                Login
            </Link>
            <Link
                className="text-2xl hover:text-blue-400 transition"
                to="/home"
            >
                Home
            </Link>
            <Link
                className="text-2xl hover:text-blue-400 transition"
                to="/user-profile"
            >
                Profile
            </Link>
        </header>
    )
}

export default Header
