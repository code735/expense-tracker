import React, { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'

export default function Header() {
  
  const { logout } = useContext(AuthContext);

  return (
    <div className='header-container'>
      <h1>Expense Tracker</h1>
      <button onClick={logout}>logout</button>
    </div>
  )
}
