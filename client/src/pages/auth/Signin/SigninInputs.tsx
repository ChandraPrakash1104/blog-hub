import { Dispatch, SetStateAction } from 'react';
import InputWithLabel from '../../../components/InputWithLabel';

const SigninInputs = ({
  email,
  setEmail,
  password,
  setPassword,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className='space-y-4'>
      <InputWithLabel
        label='Email'
        placeholder='Enter your Email'
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

export default SigninInputs;
