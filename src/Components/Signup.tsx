import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className='signup-form'>
        <button type="submit" className='google-signin signup-element'>
          Sign in with google
        </button>
        <input type="text" placeholder='username ' className='signup-element' />
        <input type="text" placeholder='password' className='signup-element' />
        <button type="submit" className='signup-btn signup-element'>Sign Up</button>
      </form>
    </div>
  );
}
