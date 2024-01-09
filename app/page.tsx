'use client'
import { signOut } from 'aws-amplify/auth'
import TodoList from '../components/Todolist'
import TodoCreateForm from '../ui-components/TodoCreateForm'
import styles from './page.module.css'
import { withAuthenticator } from '@aws-amplify/ui-react'
import BookingCreateForm from '../ui-components/BookingCreateForm'

function Home() {
  return (
    <main className={styles.main}>
      <button style={{ background: 'black', color: 'pink', padding: '20px' }} onClick={() => signOut()}>
        Sign out
      </button>
      <h1>Hello 👋</h1>
      <h2>Create</h2>
      <BookingCreateForm/>
      {/* <h2>Create Form</h2>
      <TodoCreateForm />
      <hr />
      <TodoList /> */}
      // signout button
    </main>
  )
}
export default withAuthenticator(Home)
