import { useState } from 'react';
import FormHeader from '../../../components/FormHeader';
import AuthButton from '../AuthButton';
import AuthContainer from '../AuthContainer';
import SigninInputs from './SigninInputs';
import Quote from '../../../components/Quote';
import { useNavigate } from 'react-router-dom';
import { SigninInput } from '@chandraprakash1104/blogging-common';
import { signinReq } from '../../../api';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async () => {
    const data: SigninInput = { email, password };
    const response = await signinReq(data);
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
            head='Welcome Back'
            subHead='No account? '
            linkLabel='Signup'
            linkTo='/signup'
          />
          <SigninInputs
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
          <AuthButton label='Signin' action={submitHandler} />
        </div>
      </AuthContainer>

      <div className='hidden lg:block '>
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
