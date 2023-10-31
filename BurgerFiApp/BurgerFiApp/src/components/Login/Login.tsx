
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {

        if (true) {
            navigate('/menu');
        } else {
            
        }
        
    }

    return (
        <>
            <h2>Logeate</h2>
            <button onClick={handleLogin}>Login</button>
        </>
    );
}

export default Login;