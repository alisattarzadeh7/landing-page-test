import React from "react"
import styles from "../assets/styles/Home.module.scss"
import Image from "next/image";
const HomeApplicationPart: React.FC = () => {
    return (
        <div className={styles.applicationPart}>
            <div>
                <span className={styles.title}>اپلیکشن ساتکرس</span>
            </div>
            <div className="mt-20">
                <span className={styles.secondaryTitle}> سازگار با چندین دستگاه، تجارت را با ایمنی و راحتی شروع کنید.</span>
            </div>
           <div className={styles.phonesContainer}>
               <Image src="/assets/images/phones.svg" layout='fill'/>
           </div>
        </div>
    )
}

export default HomeApplicationPart