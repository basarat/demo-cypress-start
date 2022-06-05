import React, { useState } from 'react'
import { Alert } from './Alert';
import { Button } from './Button';

export const Login: React.FC<{}> = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const handleSubmit = () => {
    setLoggedIn(true);
  }

  if (loggedIn) return <Alert />;

  return (<>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail' className='form-label'>Email address</label>
        <input type='email' className='form-control' id='exampleInputEmail' aria-describedby='emailHelp' />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword' className='form-label'>Password</label>
        <input type='password' className='form-control' id='exampleInputPassword' />
      </div>
      <div className='mb-3 form-check'>
        <input type='checkbox' className='form-check-input' id='rememberMe' />
        <label className='form-check-label' htmlFor='rememberMe'>Remember Me</label>
      </div>
      <Button type='button' className='btn btn-primary' onClick={handleSubmit}>Submit</Button>
  </>);
}

export default Login;