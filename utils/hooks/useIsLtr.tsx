import { useRouter } from "next/router"
import React from "react"

const useIsLtr: ()=>boolean = () => {
    const {locale} = useRouter()
    return locale === 'en'
}

export default useIsLtr