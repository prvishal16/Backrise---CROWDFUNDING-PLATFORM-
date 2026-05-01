import { useState, FormEvent } from 'react';
import SignupForm from './SignupForm';
import { useNavigate } from 'react-router-dom';
import { setDummyUser } from '../../services/firebase';

const SignUp = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    let email = data.get('email') as string;
    let password = data.get('password') as string;
    let confirmPassword = data.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    // Dummy signup — directly log in
    setDummyUser({
      uid: 'dummy-uid-123',
      email: email,
      displayName: email.split('@')[0],
    });
    navigate('/');
  };

  return <SignupForm handleSubmit={handleSubmit} error={error} loading={loading} />;
};

export default SignUp;