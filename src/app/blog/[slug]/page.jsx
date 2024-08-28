
import Image from "next/image";
import styles from "./singlePost.module.css";
import Bloguser from "@/components/Bloguser/Bloguser";
import { getPost } from "@/lib/data";

//FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   return res.json()
// }

// eslint-disable-next-line @next/next/no-async-client-component
const SinglePostPage = async ({params, searchParams}) => {
   const {slug} = params

   console.log(slug);
  //  const post = await getData(slug)

  //FETCH DATA WITHOUT AN API

  const post = await getPost(slug)
  
  
    return (
        <div className={styles.container}>
        
            <div className={styles.imgContainer}>
              {post.img && <Image src={post.img} alt="" fill className={styles.img} />}
            </div>
      
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.detail}>

              <Bloguser userId={post.userId}/>
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}> 01.01.24</span>
              </div>
            </div>
            <div className={styles.content}>{post.body}</div>
          </div>

        </div>
      );
}

export default SinglePostPage