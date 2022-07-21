import React from "react"
import styles from "../assets/styles/Home.module.scss";
import SatrexTable from "./SatrexTable";
import PercentageFormater from "./PercentageFormater";
import Coin from "http/models/Coin";
import {useTranslation} from "next-i18next";
import {InView} from "react-intersection-observer";
import CoinListTableRowSkeleton from "./skeletons/CoinListTableRowSkeleton";

interface HomeCoinsListProps {
    isValidating: boolean,
    coinList: Coin[] | undefined,
}


const HomeCoinsList: React.FC<HomeCoinsListProps> = ({isValidating, coinList}) => {
    const {t} = useTranslation('common');


    return (
        <>
            <InView triggerOnce>
                {({inView, ref, entry}) => {
                    // console.log('entry : ',inView)
                    // console.log('entry : ',entry)
                    return (
                        <div
                            ref={ref}
                            className={`${styles.coinListTableContainer} evenColoredRow`}>

                            {
                                inView &&
                                <SatrexTable
                                    rowPlaceholder={{
                                        component:CoinListTableRowSkeleton,
                                        count:10
                                    }}
                                    isLoading={isValidating}
                                    rows={coinList && coinList.map(item => ({
                                        ...item,
                                        name: <div className="flex middle">
                                            <img src={item.sourceAssetImageAddress} style={{width: 35}}
                                                 alt="coin image"/>&nbsp;&nbsp;
                                            <span style={{height: 'fit-content'}}>{item.sourceAssetPersianTitle}</span>
                                        </div>,
                                        marketImage: <>
                                            <img src={item.sourceAssetUrlGraphData} alt="market chart image"/>
                                        </>,
                                        changeFor24Hours: <span className="faNum"><PercentageFormater
                                            value={item.changeForLastIn24HoursInPercent}/></span>,
                                        priceInToman: <span className="faNum">{item.lastPriceInToman}</span>
                                    })) }
                                    headers={[
                                        {
                                            label: t('home.table.column.name'),
                                            accessor: 'name',
                                            sortBy: 'sourceAssetPersianTitle',
                                        }, {
                                            label: t('home.table.column.symbol'),
                                            accessor: 'pairSymbol',
                                            sortBy: 'pairSymbol',
                                        }, {
                                            label: t('home.table.column.lastPrice'),
                                            accessor: 'priceInToman',
                                            sortBy: 'lastPriceInToman',
                                        }, {
                                            label: t('home.table.column.last24Change'),
                                            accessor: 'changeFor24Hours',
                                            sortBy:'changeForLastIn24HoursInPercent',
                                        }, {
                                            label: t('home.table.column.market'),
                                            accessor: 'marketImage',
                                        }]}/>
                            }
                        </div>
                    )
                }}</InView>
        </>
    )
}

export default HomeCoinsList