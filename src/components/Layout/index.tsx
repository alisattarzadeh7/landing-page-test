import { TextField } from '@mui/material';
import type {NextPage} from 'next'
import { useRouter } from 'next/router';
import { ReactNode } from "react";
import Header from "./Header";
import React from "react"

interface LayoutProps{
    children:ReactNode
}


const Index: React.FC<LayoutProps> = ({children}) => {

    const {locale} = useRouter()

    return (
        <div className={locale + 'App'}>
            <Header/>
            {children}
        </div>
    )
}

export default Index
