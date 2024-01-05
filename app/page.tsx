'use client';
import styles from './page.module.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello 👋</h1>
    </main>
  )
}
export default withAuthenticator(Home)
