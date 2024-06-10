import styles from './login.module.css'
import padlock from './assets/padlock.svg'
import email from './assets/email.svg'
import { ButtonSubmit } from '../../components/Buttons/SubmitButton';

export const Login = () => {
  return (
    <div id={styles.container}>
    <div id={styles.leftContainer}>
      <h1>Nome do negócio</h1>
      <h4>Um slogan aleatório</h4>

    </div>
    <div id={styles.rightContainer}>
      <h2>Bem vindo!</h2>
      <form id={styles.loginForm}>
        <div className={styles.fieldSection}>
          <label htmlFor="email" className={styles.formLabel}><img src={email} alt="icone de email" /></label>
          <input type='email' required placeholder='Endereço de email' id='email'/>
        </div>
        <div className={styles.fieldSection}>
          <label htmlFor="password"  className={styles.formLabel}><img src={padlock} alt="icone de email"/></label>
          <input type='password' required placeholder='Senha' id='password'/>
        </div>
        <ButtonSubmit label='Entrar'/>
      </form>
    </div>
    </div>
  )
};
