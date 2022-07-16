import React from 'react';
import SatrexNumFormat from './SatrexNumFormat';
import useIsLtr from "../utils/hooks/useIsLtr";
import {satrexGreen} from "../assets/styles/colors"

interface PercentageFormaterProps {
    value: string;
    style?:any;
}

const PercentageFormater: React.FC<PercentageFormaterProps> = ({ value, ...otherProps }) => {
    const isLtr = useIsLtr();

    return (
        <span
        className="flex flexDirection ltr"
        style={{
            color:
                parseFloat(value) > 0
                    ? satrexGreen
                    : parseFloat(value)
                    < 0
                        ? 'red'
                        : '',
            width: 'fit-content',
        }}
        {...otherProps}
        >
    {
        (parseFloat(value) < 0) && !isLtr && '-'
    }
        %
        <SatrexNumFormat
            num={Math.abs(parseFloat(value))}
        />
        {
            (parseFloat(value) < 0) && isLtr && '-'
        }
        </span>
    );
};

export default PercentageFormater;
