import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

function AuthPage(props) {
  return (
    <>
    <h1>Herbal Remedies</h1>
    <h3>Sign up or Log in</h3>
    <SignUpForm setUser={props.setUser}/>
    <LoginForm setUser={props.setUser} />
    </>
  )
}

export default AuthPage