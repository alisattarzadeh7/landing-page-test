import React from 'react';
import { makeStyles } from '@mui/styles';
import { Tooltip } from '@mui/material';
import { numberWithCommas } from '../utils/helpers/numberWithCommas';
import satrexFloatFormat from "../utils/helpers/satrexFloatFormat";

const useStyles = makeStyles({
  popperStyle: {
    fontSize: 15,
  },
});

const SatrexNumFormat = ({ num }) => {
  const floatPart = num.toString().split('.')[1];

  const classes = useStyles();

  return (
    <Tooltip
      title={(
        <span
          dir="ltr"
        >
{numberWithCommas(floatPart ? `${num.toString().split('.')[0]}.${floatPart.slice(0, 8)}` : num.toString())}
        </span>
      )}
      classes={{
        tooltip: classes.popperStyle,
      }}
    >
      <i style={{ fontStyle: 'normal', direction: 'ltr' }}>{numberWithCommas(satrexFloatFormat(num))}</i>
    </Tooltip>
  );
};

export default SatrexNumFormat;
