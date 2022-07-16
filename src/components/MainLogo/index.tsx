import React from "react"
import Image from "next/image";
import mainLogoWithShadow from "../../assets/images/loginComponent/mainLogoWithShadow.svg"
import textLogo from "../../assets/images/loginComponent/TextLogo.svg"
import styles from "./logoStyles.module.scss"
const index: React.FC = () => {
    return (
        <div dir="ltr">
            <div className={styles.mainShadowContainer}>
            <Image
                src={mainLogoWithShadow}
                alt="main logo image"
                width='100%'
                layout="fill"
                height='700'
                className={styles.shadowStyles}
            />

            </div>
            <div className={styles.textLogoContainer}>
                <Image
                    src={textLogo}
                    alt="main logo image"
                    width='100%'
                    layout="fill"
                    height='100%'
                />
            </div>
        </div>
    )
}

export default index