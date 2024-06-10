import styles from './login.module.css'
import padlock from './assets/padlock.svg'
import emailImage from './assets/email.svg'
import { ButtonSubmit } from '../../components/Buttons/SubmitButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault() 
    setError('')

     const users = await fetch('http://localhost:3000/login',{
      method:'GET',
    })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Ocorreu um erro na requisição:', error);
    });

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      navigate('/home')
    } else {
      setError('Email ou senha incorretos');
    }
  }

  return (
    <div id={styles.container}>
    <div id={styles.leftContainer}>
      <h1>Nome do negócio</h1>
      <h4>Um slogan aleatório</h4>

    </div>
    <div id={styles.rightContainer}>
      <h2>Bem vindo!</h2>
      <form onSubmit={(e) => handleSubmit(e)} id={styles.loginForm}>
      {error && <p id={styles.error}>{error}</p>}
        <div className={styles.fieldSection}>
          <label htmlFor="email" className={styles.formLabel}><img src={emailImage} alt="icone de email" /></label>
          <input type='email' required placeholder='Endereço de email' id='email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles.fieldSection}>
          <label htmlFor="password"  className={styles.formLabel}><img src={padlock} alt="icone de email"/></label>
          <input type='password' required placeholder='Senha' id='password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <ButtonSubmit label='Entrar'/>
      </form>
    </div>
    </div>
  )
};
