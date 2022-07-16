import React from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import PercentageFormater from "./PercentageFormater";
import 'swiper/css';
import "swiper/css/pagination";
import Coin from "../http/models/Coin";
import {Divider, useMediaQuery} from "@mui/material";
import SatrexNumFormat from "./SatrexNumFormat";

interface HomeCoinSwiperProps{
    coins:Coin[]
}

const HomeCoinSwiper: React.FC<HomeCoinSwiperProps> = ({coins}) => {

    const xs = useMediaQuery('(min-width:400)');
    const sm = useMediaQuery('(min-width:600)');
    const md = useMediaQuery('(min-width:980px)');
    const lg = useMediaQuery('(min-width:1280px)');
    const xlg = useMediaQuery('(min-width:1920px)');
    const xxlg = useMediaQuery('(min-width:2500px)');
    const xxxlg = useMediaQuery('(min-width:3000px)');


    const calcSlidesPerView = ()=>{
        if(xxxlg) return 7
        if(xxlg) return 6
        if(xlg) return 5
        if(lg) return 4
        if(md) return 3
        if(sm) return 2
        if(xs) return 1
    }

    return (
        <>
            <Swiper
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                loop
                // centeredSlides={true}
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={50}
                slidesPerView={calcSlidesPerView()}
                navigation
                dir="ltr"
                className="coinSwiperSlides"
            >
                {coins.filter(item=>item.destinationAssetSymbol !== 'USDT').map((item,index)=>{
                    return (
                        <SwiperSlide>

                            <div className="flex column space-between w-100">
                                <div className="flex middle">
                                    <img src={item?.sourceAssetImageAddress} alt={item?.pairSymbol+ ' image'} style={{width:40}}/>
                                    &nbsp;&nbsp;
                                    {
                                        item?.pairSymbol
                                    }
                                    <PercentageFormater value={item?.changeForLastIn24HoursInPercent + 1}/>
                                </div>
                                <div className="flex column space-between" style={{minHeight:50,marginTop:10}}>
                                    <div className="flex bold">
                                        <SatrexNumFormat  num={item?.lastPriceInToman} />
                                        {/*{item.lastPriceInToman}*/}
                                    </div>
                                    <div className="flex">
                                        ≈ &nbsp;{item?.lastPriceInTether}
                                    </div>
                                </div>
                            </div>
                            <Divider orientation="vertical" style={{marginLeft:70}}/>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>
    )
}

export default HomeCoinSwiper