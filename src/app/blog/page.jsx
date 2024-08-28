/* eslint-disable @next/next/no-async-client-component */
// "use client"
import PostCard from '@/components/Postcard/Postcard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// FETCH WITH AN API 
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog")
  return res.json()
}


const Blogpage = async () => {

  const postData = await getData()
  // FETCH WITHOUT AN API 

  // const postData = await getPosts()
  return (
    <div className={styles.container}>
      {postData.map(post => <div key={postData.id} className={styles.post}> <PostCard post={post} /></div>)}



    </div>
  )
}

export default Blogpage