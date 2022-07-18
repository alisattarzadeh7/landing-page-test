import React from "react"
import Image from "next/image";
import mainLogoWithShadow from "../../assets/images/loginComponent/mainLogoWithShadow.svg"
import textLogo from "../../assets/images/loginComponent/TextLogo.svg"
import styles from "./logoStyles.module.scss"
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const index: React.FC = () => {

    const { scrollY } = useViewportScroll()
    const y = useTransform(scrollY, [0, 200], [-0, -100])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])


    return (
        <div dir="ltr">
            <motion.div className={styles.mainShadowContainer} >
            <Image
                src={mainLogoWithShadow}
                alt="main logo image"
                width='100%'
                layout="fill"
                height='700'
                className={styles.shadowStyles}
            />
                <div dir="rtl" className="w-100 h-100">

                    <motion.div animate={{width:0}} transition={{ delay:0,duration:0.5 }} className={styles.topShadowEffect}/>
                </div>
            </motion.div>
            <motion.div className={styles.textLogoContainer} style={{y,opacity}} initial={{opacity:0}} animate={{opacity:1}}>
                <Image
                    src={textLogo}
                    alt="main logo image"
                    width='100%'
                    layout="fill"
                    height='100%'
                />
            </motion.div>
        </div>
    )
}

export default index