import { useState } from 'react'
import styles from './AuthPage.module.css'
import SignUpForm from '../components/SignUpForm'
// import LoginForm from '../../components/LoginForm'
import LoginForm from '../components/LoginForm'
// import Logo from '../../components/Logo/Logo'

function AuthPage(props) {
  const [ showLogin, setShowLogin ] = useState(true);

  return (
    <main className={styles.AuthPage} >
            <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Not a member? Sign Up' : 'Welcome Back! Log In'}</h3>
    { showLogin ? <LoginForm setUser={props.setUser} /> : <SignUpForm setUser={props.setUser}/>}
    </ main>
  )
}

export default AuthPage