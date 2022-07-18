import React, { useEffect, useState } from "react"
import {Divider, Grid} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";
import SatrexButton from "../SatrexButton";
import {useViewportScroll} from "framer-motion";

const Header: React.FC = () => {

    const {locale} = useRouter();
    const [headerScrolled,setHeaderScrolled] = useState(false)

    useEffect(()=>{
        window.addEventListener('headerSwitched',(e)=>{
                            console.log('headerSwitched ')
            setHeaderScrolled(true)
        })
        window.addEventListener('headerReturned',(e)=>{
                            console.log('headerReturned ')
            setHeaderScrolled(false)
        })
    },[])


    return (
        <div className={`headerContainer position-fixed ${ headerScrolled ? 'scrolledHeader' : '' }`}>
            <div className="mainHeader ">
                <div className=" headerContent flex">
                    <img src="./assets/images/whiteTextLogo.svg" className="whiteTextLogo" alt=""/>
                    <div className="flex center" style={{minWidth: '5%', minHeight: 35}}>
                        <Divider orientation="vertical" variant="middle" flexItem/>
                    </div>
                    <Grid container>
                        <Grid xs={6} item>

                            <Grid container className="space-between">
                                <Grid xs={2} item className="link">
                                    <Link locale={locale} href="/">صفحه اصلی</Link></Grid>
                                <Grid xs={2} item className="link">
                                    <Link locale={locale} href="/orders">معاملات</Link></Grid>
                                <Grid xs={2} item className="link">
                                    <Link locale={locale} href="/advanced-trade">ترید پیشرفته</Link></Grid>
                                <Grid xs={2} item className="link">
                                    <Link locale={locale} href="/market">مارکت</Link></Grid>
                                <Grid xs={2} item className="link">
                                    <Link locale={locale} href="/blog">بلاگ</Link></Grid>
                                <Grid xs={2} item className="link">
                                    <Link locale={locale} href="/contact">تماس با ما</Link></Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={1} item/>
                        <Grid xs={5} item className="sessions-buttons" >
                            <Grid container className=" row-reverse">
                                <SatrexButton label='ثبت نام' variant="contained" color="orange"/>&nbsp;&nbsp;&nbsp;
                                <SatrexButton label='ورود' variant="outlined" color="white"/>

                            </Grid>
                        </Grid>
                    </Grid>


                </div>
            </div>
        </div>
    )
}

export default Header