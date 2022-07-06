import type {NextPage} from 'next'
import { Provider } from 'react-redux'
import store from "./redux/store";
import {ReactNode} from "react";

interface ProviderProps{
    children:ReactNode
}

const Providers: NextPage<ProviderProps> = ({children}) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    )
}

export default Providers
