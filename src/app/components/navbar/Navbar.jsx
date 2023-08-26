import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>Reacton</Link>
      <Link href='/topics'>Topic List</Link>
      <Link style={{backgroundColor: 'lightgray', padding: '5px'}} href='/addTopic'>Add Topic</Link>
    </div>
  )
}

export default Navbar