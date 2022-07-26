import type {NextPage} from 'next'
import {Provider} from 'react-redux'
import store from "./redux/store";
import {ReactNode} from "react";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useIsLtr from "../utils/hooks/useIsLtr"
import { ltrTheme, rtlTheme} from "./theme"
import { SWRConfig } from 'swr'
interface ProviderProps {
    children: ReactNode
}


const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
});


const cacheLtr = createCache({
    key: 'muiltr',
    stylisPlugins: [],
});


const Providers: NextPage<ProviderProps> = ({children}) => {
    const isLtr = useIsLtr()


    return (
        <div dir={!isLtr ? 'rtl' : 'ltr'}>
            <SWRConfig
                value={{
                    refreshInterval: 5000,
                    revalidateOnFocus:false,
                }}
            >
            <CacheProvider value={isLtr ? cacheLtr : cacheRtl}>
                <ThemeProvider theme={createTheme(
                    isLtr ? ltrTheme : rtlTheme
                )}>
                <Provider store={store}>
                    {children}
                </Provider>
                </ThemeProvider>
            </CacheProvider>
            </SWRConfig>
        </div>
    )
}

export default Providers
