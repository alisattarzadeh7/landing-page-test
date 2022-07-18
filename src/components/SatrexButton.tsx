import React from "react"
import {Button, ButtonProps} from "@mui/material";

interface satrexButtonProps extends  ButtonProps {
    label:string
    style:object
}

const SatrexButton: React.FC<satrexButtonProps > = (props) => {
    const { label } = props
    return (
        <>
            <Button variant="text" disableElevation {...props} >{label}</Button>
        </>
    )
}

export default SatrexButton