import React from 'react';
import {useRouter} from "next/router";

const useIsLtr = (props) => {
    const { locale } = useRouter();
    return locale === 'en'
}

export default useIsLtr;