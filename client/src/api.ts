import axios from 'axios';
import { SigninInput, SignupInput } from '@chandraprakash1104/blogging-common';

export const url = 'https://server.chandraprakash00504.workers.dev/api/v1';

export const signupReq = async (data: SignupInput) => {
  try {
    const res = await axios.post(`${url}/user/signup`, data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const signinReq = async (data: SigninInput) => {
  try {
    const res = await axios.post(`${url}/user/signin`, data);
    return res;
  } catch (e) {
    console.log(e);
  }
};
