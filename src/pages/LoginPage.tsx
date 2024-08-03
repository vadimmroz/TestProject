import LoginForm from '../features/auth/components/LoginForm';
import {FC} from "react"

const LoginPage: FC = () => {
    return (
        <div className="container mx-auto max-w-sm mt-20">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
