'use client';
import TodoList from '../components/Todolist';
import styles from './page.module.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello 👋</h1>
      <TodoList />
    </main>
  )
}
export default withAuthenticator(Home)
