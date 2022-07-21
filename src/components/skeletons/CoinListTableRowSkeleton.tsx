import {Skeleton, TableCell, TableRow} from "@mui/material"
import React from "react"

const CoinListTableRowSkeleton: React.FC = () => {
    return (
        <>
            <TableRow>
                <TableCell component="td" scope="row" >
                    <div className="flex middle">
                        <Skeleton style={{minWidth: 35, height: 35}} animation="wave" variant="circular"/>&nbsp;&nbsp;&nbsp;
                        <Skeleton variant="rectangular" animation="wave" width={100} height={15}/>
                    </div>
                </TableCell>
                <TableCell component="td" scope="row" ><Skeleton variant="rectangular" animation="wave" width={100} height={15}/></TableCell>
                <TableCell component="td" scope="row" ><Skeleton variant="rectangular" animation="wave" width={100} height={15}/></TableCell>
                <TableCell component="td" scope="row" ><Skeleton variant="rectangular" animation="wave" width={100} height={15}/></TableCell>
                <TableCell component="td" scope="row" ><Skeleton variant="rectangular" animation="wave" width={164} height={50}/></TableCell>
            </TableRow>
        </>
    )
}

export default CoinListTableRowSkeleton