import React from 'react'
import Links from './Links/Links'
import styles from './Navbar.module.css'
import { auth } from '@/lib/auth';

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  
  return (
    <div className={styles.container}>
      <h2>Logo</h2>
      <Links session/>
    </div>
  )
}

export default Navbar