import React from "react"
import Link from "next/link";
import styles from "../assets/styles/Home.module.scss"


const HomeBlogPart: React.FC = () => {
    return (
        <>
            <div className="flex center" style={{padding:'40px 0px'}}>
                <Link href="http://satrex.ir/blog" ><span className={styles.blogLink}>بلاگ</span></Link>
            </div>
        </>
    )
}

export default HomeBlogPart