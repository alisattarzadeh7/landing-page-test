import React from "react"
import {motion} from "framer-motion";
import styles from "../../assets/styles/Home.module.scss";
import PercentageFormater from "../PercentageFormater";
import SatrexNumFormat from "../SatrexNumFormat";
import {Divider, Skeleton} from "@mui/material";

const CoinSwiperSkeleton: React.FC = () => {
    return (
        <>
            <div
                className="flex column space-between w-100"
            >
                <div className="flex middle">
                    <Skeleton style={{minWidth: 35, height: 35}} animation="wave" variant="circular"/>
                    &nbsp;&nbsp;&nbsp;
                    <span className={styles.pairSymbolStyle}>
                                         <Skeleton variant="rectangular" animation="wave" width={100} height={15}/>
                                    </span>
                    <span className={styles.changePercentStyle}>
                                      <Skeleton variant="rectangular" animation="wave" width={30} height={15}/>
                                    </span>

                </div>
                <div className="flex column space-between" style={{minHeight: 50, marginTop: 10}}>
                    <div className={styles.tomanPrice}>
                        <Skeleton variant="rectangular" animation="wave" width={100} height={15}/>
                        {/*{item.lastPriceInToman}*/}
                    </div>
                    <div className={styles.tetherPrice}>
                        <Skeleton variant="rectangular" animation="wave" width={100} height={15}/>
                    </div>
                </div>
            </div>
            <Divider orientation="vertical" style={{marginLeft: 70, borderColor: '#515151bf'}}/>
        </>
    )
}

export default CoinSwiperSkeleton