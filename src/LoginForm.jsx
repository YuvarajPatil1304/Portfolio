import { useAuth0 } from '@auth0/auth0-react';

const LoginForm = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LoginForm