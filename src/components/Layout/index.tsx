import { TextField } from '@mui/material';
import type {NextPage} from 'next'
import { useRouter } from 'next/router';
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps{
    children:ReactNode
}


const index: NextPage<LayoutProps> = ({children}) => {

    const {locale} = useRouter()

    return (
        <div className={locale + 'App'}>
            <Header/>
            {children}
        </div>
    )
}

export default index
