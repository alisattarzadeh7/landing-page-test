import React from "react"
import {Button, ButtonProps} from "@mui/material";

interface satrexButtonProps extends  ButtonProps {
    label:string

}

const SatrexButton: React.FC<satrexButtonProps > = (props) => {
    const { label } = props
    return (
        <>
            <Button variant="text" style={{borderRadius:22,minHeight:42}} disableElevation {...props}>{label}</Button>
        </>
    )
}

export default SatrexButton