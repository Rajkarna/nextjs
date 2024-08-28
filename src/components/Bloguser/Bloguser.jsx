/* eslint-disable @next/next/no-async-client-component */
// "use client"
import { getUser } from '@/lib/data'
import styles from './Bloguser.module.css'
import Image from 'next/image'

// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     return res.json()
//   }

const Bloguser = async ({ userId }) => {


    // const userData = await getData(userId)

    const userData = await getUser(userId)
    return (


        <div className={styles.container}>
            <Image className={styles.img} src={userData.img ? userData.img : '/noavatar.png'} height={30} width={30} alt=''></Image>
            <div className={styles.userText}>
                <span className={styles.userTitle}>Author</span>
                <span className={styles.userValue}>{userData.username}</span>
            </div>
        </div>


    )
}

export default Bloguser