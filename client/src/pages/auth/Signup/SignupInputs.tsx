import InputWithLabel from '../../../components/InputWithLabel';
import { Dispatch, SetStateAction } from 'react';

const SignupInputs = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
}: {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className='space-y-4'>
      <InputWithLabel
        label='Username'
        placeholder='Enter your username'
        type='text'
        value={username}
        setValue={setUsername}
      />
      <InputWithLabel
        label='Email'
        placeholder='john@abc.com'
        type='email'
        value={email}
        setValue={setEmail}
      />
      <InputWithLabel
        label='Password'
        placeholder=''
        type='password'
        value={password}
        setValue={setPassword}
      />
    </div>
  );
};

export default SignupInputs;
