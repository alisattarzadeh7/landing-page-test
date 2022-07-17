import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import {TableHead} from '@mui/material';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}


// function EnhancedTableHead(props: EnhancedTableProps) {
//     const { order, orderBy, onRequestSort } =
//         props;
//     const createSortHandler =
//         (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
//             onRequestSort(event, property);
//         };
//
//     return (
//         <TableHead>
//             <TableRow>
//                 {headCells.map((headCell) => (
//                     <TableCell
//                         key={headCell.id}
//                         align={headCell.numeric ? 'right' : 'left'}
//                         padding={headCell.disablePadding ? 'none' : 'normal'}
//                         sortDirection={orderBy === headCell.id ? order : false}
//                     >
//                         <TableSortLabel
//                             active={orderBy === headCell.id}
//                             direction={orderBy === headCell.id ? order : 'asc'}
//                             onClick={createSortHandler(headCell.id)}
//                         >
//                             {headCell.label}
//                             {orderBy === headCell.id ? (
//                                 <Box component="span" sx={visuallyHidden}>
//                                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                                 </Box>
//                             ) : null}
//                         </TableSortLabel>
//                     </TableCell>
//                 ))}
//             </TableRow>
//         </TableHead>
//     );
// }


interface SatrexTableProps {
    rows: object[],
    headers: { label: string, accessor: string }[],
}

const SatrexTable: React.FC<SatrexTableProps> = ({rows, headers}) => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState('calories');

    const getTds = (item) => {
        console.log(item)
        return Object.values(item).map((value, index) => {
            return (
                <TableCell key={index} component="td" scope="row" align="center">
                    {value}
                </TableCell>
            );
        })
        return ''
    };


    // const handleRequestSort = (
    //     event: React.MouseEvent<unknown>,
    //     property: keyof Data,
    // ) => {
    //     const isAsc = orderBy === property && order === 'asc';
    //     setOrder(isAsc ? 'desc' : 'asc');
    //     setOrderBy(property);
    // };
    //
    // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.checked) {
    //         const newSelecteds = rows.map((n) => n.name);
    //         setSelected(newSelecteds);
    //         return;
    //     }
    //     setSelected([]);
    // };


    return (

        <TableContainer>
            <Table
                sx={{minWidth: 750}}
                aria-labelledby="tableTitle"
            >
                <TableHead>
                    <TableRow>
                        {
                            headers.map((item, index) => (
                                <TableCell align="center" key={index}>{item.label}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                {/*<EnhancedTableHead*/}
                {/*    numSelected={selected.length}*/}
                {/*    order={order}*/}
                {/*    orderBy={orderBy}*/}
                {/*    onSelectAllClick={handleSelectAllClick}*/}
                {/*    onRequestSort={handleRequestSort}*/}
                {/*    rowCount={rows.length}*/}
                {/*/>*/}
                <TableBody>
                    {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                    {rows.map((row, index) => {


                        return (
                            <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={index}
                            >
                                {
                                    headers.map(item => {
                                        return (
                                            <TableCell key={index} component="td" scope="row" align="center">
                                                {row[item.accessor]}
                                            </TableCell>
                                        )
                                    })
                                }

                                {/*{*/}
                                {/*    getTds(Object.fromEntries(*/}
                                {/*        Object.entries(row).slice(0, (headers).length),*/}
                                {/*    ))*/}
                                {/*}*/}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SatrexTable