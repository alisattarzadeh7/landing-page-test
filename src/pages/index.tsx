import {Grid} from '@mui/material'
import type {NextPage} from 'next'
import Head from 'next/head'

import Coin from '../http/models/Coin'

import styles from "../assets/styles/Home.module.scss"
import mainLogo from "../assets/images/loginComponent/mainLogo.svg"
import topShadow from "../assets/images/loginComponent/topShadow.svg"
import bottomShadow from "../assets/images/loginComponent/bottomShadow.svg"
import 'swiper/css';
import "swiper/css/pagination";
import HomeCoinSwiper from "../components/HomeCoinSwiper";
import useSWR from 'swr'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'
import SatrexButton from "../components/SatrexButton";
import Image from 'next/image'
import MainLogo from "../components/MainLogo/index";


interface HomeProps {
    // coins: Coin[]
}

const Home: NextPage<HomeProps> = () => {

    const { data, error } = useSWR('getALlCoins', Coin.getALlCoins)
    const { t } = useTranslation('common');


    return (
        <div>
            <Head>
                <title>Satrex</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <main className={styles.mainBanner}>
                <div className={styles.logoContainer}>
                    <MainLogo />
                </div>
                <div className={styles.bannerContent + '  position-relative'}>
                    <div className={styles.coinCampaign}>

                        <div>
                            <h2>{t('home.sell&Buy')}</h2>
                            <h1 className="bold">{t('home.cryptoCurrencies')}{t('home.inMinutes')}</h1>
                            <h3>{t('home.joinUs')}</h3>
                            <SatrexButton label={t('home.doRegisterBtn')} variant="contained" color="orange"  />
                        </div>
                        <div className="flex column" >
                            <div className={styles.coinSwiper}>
                                {
                                    data &&
                                    <HomeCoinSwiper coins={data}/>
                                }
                            </div>
                            <div className={styles.campaign}>
                                <Grid container spacing={4}>
                                    <Grid xs={4} item><img src="https://satrex.ir/wp-content/uploads/2022/07/7.jpg" alt=""/></Grid>
                                    <Grid xs={4} item><img src="https://satrex.ir/wp-content/uploads/2022/07/9.jpg" alt=""/></Grid>
                                    <Grid xs={4} item><img src="https://satrex.ir/wp-content/uploads/2022/07/8.jpg" alt=""/></Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    {/*<TextField label="Name" variant="standard" />*/}
                </div>
            </main>

        </div>
    )
}

export const getStaticProps = async ({ locale }:{locale:string}) => ({
    props: {
        ...(await serverSideTranslations(
            locale,
            ['common'],
        )),
    },
});

export default Home