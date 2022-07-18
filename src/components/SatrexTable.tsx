import React ,{useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import {TableHead, TableSortLabel} from '@mui/material';

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



function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {props.headers.map((headCell,index) => (
                    <TableCell
                        key={index}
                        sortDirection={orderBy === headCell.accessor ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.accessor}
                            direction={orderBy === headCell.accessor ? order : 'asc'}
                            onClick={createSortHandler(headCell.accessor)}
                        >
                            {headCell.label}
                            {/*{orderBy === headCell.id ? (*/}
                            {/*    <Box component="span" sx={visuallyHidden}>*/}
                            {/*        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}*/}
                            {/*    </Box>*/}
                            {/*) : null}*/}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


interface SatrexTableProps {
    rows: object[],
    headers: { label: string, accessor: string }[],
}

const SatrexTable: React.FC<SatrexTableProps> = ({rows, headers}) => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState('');
    const [searchInput,setSearchInput] = React.useState('')
    const [data,setData] = useState(rows)

    useEffect(()=>{
        setData(rows.filter(function(row) {
            return row.sourceAssetPersianTitle.toLowerCase().indexOf(searchInput) != -1 ||  row.sourceAssetEnglishTitle.toLowerCase().indexOf(searchInput) != -1
        }))
    },[searchInput])

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: any,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
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
        <>
            <div className="searchInputContainer">
                <img src="./icons/searchIcon.svg" alt="search icon"/>
                <input type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className="searchInput"/>
            </div>
            <TableContainer className="satrexTable">
                <Table
                    sx={{minWidth: 750}}
                    aria-labelledby="tableTitle"
                >
                    {/*<TableHead>*/}
                    {/*    <TableRow>*/}
                    {/*        {*/}
                    {/*            headers.map((item, index) => (*/}
                    {/*                <TableCell align="center" key={index}>{item.label}</TableCell>*/}
                    {/*            ))*/}
                    {/*        }*/}
                    {/*    </TableRow>*/}
                    {/*</TableHead>*/}
                    <EnhancedTableHead
                        headers={headers}
                        order={order}
                        orderBy={orderBy}
                        rowCount={rows.length}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
             */}
                        {data.sort(getComparator(order, orderBy)).map((row, index) => {


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
                                                <TableCell key={index} component="td" scope="row" >
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
        </>
    );
}

export default SatrexTable