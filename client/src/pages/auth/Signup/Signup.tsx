import { useState } from 'react';
import FormHeader from '../../../components/FormHeader';
import AuthButton from '../AuthButton';
import AuthContainer from '../AuthContainer';
import SignupInputs from './SignupInputs';
import { signupReq } from '../../../api';
import Quote from '../../../components/Quote';
import { SignupInput } from '@chandraprakash1104/blogging-common';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const submitHandler = async () => {
    const data: SignupInput = { name: username, password, email };
    const response = await signupReq(data);
    const token = response?.data.token;
    localStorage.setItem('token', token);
    navigate('/blogs');
    console.log(response);
  };

  return (
    <div className='lg:grid lg:grid-cols-2 h-screen '>
      <AuthContainer>
        <div className='space-y-8'>
          <FormHeader
            head='Create an account'
            subHead='Already have an account? '
            linkLabel='Login'
            linkTo='/signin'
          />
          <SignupInputs
            username={username}
            password={password}
            email={email}
            setUsername={setUsername}
            setPassword={setPassword}
            setEmail={setEmail}
          />
          <AuthButton label='Signup' action={submitHandler} />
        </div>
      </AuthContainer>
      <div className='hidden lg:block '>
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
