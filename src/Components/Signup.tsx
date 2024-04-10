import * as React from 'react';
import { useState } from 'react';

export default function SignUp() {

  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const url = process.env.REACT_APP_API+'/signup';
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data",data)


    } catch ( error ) {
      console.error('Error:', error);
      throw error;
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className='signup-form'>
        <button type="submit" className='google-signin signup-element'>
          Sign in with google
        </button>
        <input type="text" placeholder='username' className='signup-element' onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUsername(event.target.value)
        }} />
        <input type="text" placeholder='password' className='signup-element' onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value)
        }} />
        <button type="submit" className='signup-btn signup-element'>Sign Up</button>
      </form>
    </div>
  );
}
