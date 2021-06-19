import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, useSession, signOut } from 'next-auth/client'

export function SignInButton () {

  const [session] = useSession()


  return session ? (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={()=>signOut()}
    >
      <FaGithub color="#04d301"/>
      {session.user.name}
      <FiX  color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#ebaf17"/>
      Sign in with GitHub
    </button>
  )
}