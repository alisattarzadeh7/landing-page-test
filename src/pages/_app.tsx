import '../assets/styles/globals.scss'
import type {AppProps} from 'next/app'
import Providers from "../config/Providers";
import Layout from '../components/Layout';
import { appWithTranslation } from 'next-i18next';

function MyApp({Component, pageProps}: AppProps) {
    return <Providers>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Providers>
}

export default appWithTranslation(MyApp);
