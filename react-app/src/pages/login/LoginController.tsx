import { useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import { setDummyUser } from '../../services/firebase';

const DUMMY_EMAIL = 'test@test.com';
const DUMMY_PASSWORD = 'password123';

const Login = () => {
  const [error, setError] = useState<string>('');
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    let email = data.get('email') as string;
    let password = data.get('password') as string;

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      setDummyUser({
        uid: 'dummy-uid-123',
        email: DUMMY_EMAIL,
        displayName: 'Test User',
      });
      navigate(from, { replace: true });
    } else {
      setError('Wrong email or password. Use test@test.com / password123');
    }
  };

  return <LoginForm handleSubmit={handleSubmit} error={error} />;
};

export default Login;