"use client"

import Image from "next/image";
import styles from "./contact.module.css";
// import Hydrationtest from "@/components/Hydrationtest";
// import dynamic from "next/dynamic";

// const HydrationtestSSR = dynamic(() => import("../../components/Hydrationtest"), {ssr:false})


const Contactpage = () => {
  // const a = Math.random()
  // console.log(a);

  return (

   
    <div className={styles.container}>
     
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
       {/* <HydrationtestSSR /> */}
       {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="10"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contactpage