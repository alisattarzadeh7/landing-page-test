import React from "react"
import styles from "../assets/styles/Home.module.scss"
import Image from "next/image";
const HomeApplicationPart: React.FC = () => {
    return (
        <div className={styles.applicationPart}>
            <h1>اپلیکشن ساتکرس</h1>
            <h1> سازگار با چندین دستگاه، تجارت را با ایمنی و راحتی شروع کنید.</h1>
           <div className={styles.phonesContainer}>
               <Image src="/assets/images/phones.svg" layout='fill'/>
           </div>
        </div>
    )
}

export default HomeApplicationPart