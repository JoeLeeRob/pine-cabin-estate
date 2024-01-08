'use client';
import React from 'react'

const onClick = () => { alert('Login') };

const LoginButton = () => {
  return (
    <>
      <button onClick={onClick}>Login</button>
    </>
  )
}

export default LoginButton
