import React, {useEffect, useState} from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import PercentageFormater from "./PercentageFormater";
import 'swiper/css';
import "swiper/css/pagination";
import Coin from "../http/models/Coin";
import {Divider, useMediaQuery} from "@mui/material";
import SatrexNumFormat from "./SatrexNumFormat";
import styles from "../assets/styles/Home.module.scss"
import {motion} from "framer-motion";
import CoinSwiperSkeleton from "./skeletons/CoinSwiperSkeleton";


interface HomeCoinSwiperProps {
    coins: Coin[] | undefined;
    loading: boolean;
}

const HomeCoinSwiper: React.FC<HomeCoinSwiperProps> = ({coins, loading}) => {

    const xs = useMediaQuery('(min-width:400)');
    const sm = useMediaQuery('(min-width:600)');
    const md = useMediaQuery('(min-width:980px)');
    const lg = useMediaQuery('(min-width:1280px)');
    const xlg = useMediaQuery('(min-width:1920px)');
    const xxlg = useMediaQuery('(min-width:2500px)');
    const xxxlg = useMediaQuery('(min-width:3000px)');
    const [slidesPreView,setSlidesPerView] = useState<number>(1)

    const calcSlidesPerView = () => {
        if (xxxlg) {setSlidesPerView(7); return;}
        if (xxlg) {setSlidesPerView(6); return;}
        if (xlg) {setSlidesPerView(5); return;}
        if (lg) {setSlidesPerView(4); return;}
        if (md) {setSlidesPerView(3); return;}
        if (sm) {setSlidesPerView(2); return;}
        if (xs) {setSlidesPerView(1); return;}
    }


    useEffect(()=>{
        calcSlidesPerView()
    },[xs,sm,md,lg,xlg,xxlg,xxxlg])

    console.log('loading : ',loading)

    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop
                // centeredSlides={true}
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={50}
                slidesPerView={slidesPreView}
                navigation
                dir="ltr"
                className="coinSwiperSlides"
            >
                {
                    (loading && !coins) && <>
                        <SwiperSlide><CoinSwiperSkeleton/></SwiperSlide>
                        <SwiperSlide><CoinSwiperSkeleton/></SwiperSlide>
                        <SwiperSlide><CoinSwiperSkeleton/></SwiperSlide>
                        <SwiperSlide><CoinSwiperSkeleton/></SwiperSlide>
                        <SwiperSlide><CoinSwiperSkeleton/></SwiperSlide>
                        <SwiperSlide><CoinSwiperSkeleton/></SwiperSlide>
                        <SwiperSlide><CoinSwiperSkeleton/></SwiperSlide>
                    </>
                }

                {coins && coins.map((item,index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index / 10 }}
                                className="flex column space-between w-100"
                            >
                                <div className="flex middle">
                                    <img src={item?.sourceAssetImageAddress} alt={item?.pairSymbol+ ' image'} style={{width:35}}/>
                                    &nbsp;&nbsp;
                                    <span className={styles.pairSymbolStyle}>
                                        {
                                            item?.pairSymbol
                                        }
                                    </span>
                                    <span className={styles.changePercentStyle}>
                                      <PercentageFormater value={item?.changeForLastIn24HoursInPercent }/>
                                    </span>

                                </div>
                                <div className="flex column space-between" style={{minHeight:50,marginTop:10}}>
                                    <div className={styles.tomanPrice} >
                                        <SatrexNumFormat  num={item?.lastPriceInToman} />
                                        {/*{item.lastPriceInToman}*/}
                                    </div>
                                    <div className={styles.tetherPrice} >
                                        ≈ &nbsp;
                                        <SatrexNumFormat
                                            num={item?.lastPriceInTether}
                                        />&nbsp; USDT
                                    </div>
                                </div>
                            </motion.div>
                            <Divider orientation="vertical" style={{marginLeft:70}}/>

                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>
    )
}

export default HomeCoinSwiper