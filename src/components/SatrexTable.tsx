import React, {FunctionComponent, ReactElement, ReactNode, useEffect, useState} from "react";
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



function EnhancedTableHead(props:any) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property:any) => (event:any) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {props.headers.map((headCell:any,index:number) => (
                    <TableCell
                        key={index}
                        sortDirection={headCell.sortBy ? (orderBy === headCell.sortBy ? order : false) : undefined}
                    >
                        {
                            headCell.sortBy ?
                            <TableSortLabel
                                active={orderBy === headCell.sortBy}
                                direction={orderBy === headCell.sortBy ? order : 'asc'}
                                onClick={createSortHandler(headCell.sortBy)}
                            >
                                {headCell.label}
                                {/*{orderBy === headCell.id ? (*/}
                                {/*    <Box component="span" sx={visuallyHidden}>*/}
                                {/*        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}*/}
                                {/*    </Box>*/}
                                {/*) : null}*/}
                            </TableSortLabel> : headCell.label
                        }
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


interface SatrexTableProps {
    rows: any[] | undefined,
    headers: { label: string, accessor: string,sortBy?:string }[],
    isLoading:boolean,
    rowPlaceholder: {
        count:number,
        component:FunctionComponent
    }
}

const SatrexTable: React.FC<SatrexTableProps> = ({rows,isLoading, headers,rowPlaceholder:{count:PlaceholderCount,component : PlaceholderComponent}}) => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState('');
    const [searchInput,setSearchInput] = React.useState('')
    const [data,setData] = useState<any>([])

    useEffect(()=>{
        if(rows)
        setData(rows.filter(function(row) {
            return row.sourceAssetPersianTitle.toLowerCase().indexOf(searchInput) != -1 ||  row.sourceAssetEnglishTitle.toLowerCase().indexOf(searchInput) != -1
        }))
    },[searchInput])


    useEffect(()=>{
        setData(rows)
    },[rows])

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: any,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    return (
        <>
            <div className="searchInputContainer">
                <img src="./icons/searchIcon.svg" alt="search icon"/>
                <input type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} disabled={isLoading} className="searchInput"/>
            </div>
            <TableContainer className="satrexTable homeCoinList">
                {/*{*/}
                {/*    isLoading &&*/}
                {/*    <div className="tableLoader">*/}
                {/*        <Loader/>*/}
                {/*    </div>*/}
                {/*}*/}
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
                        onRequestSort={handleRequestSort}
                    />

                    <TableBody>
                        {(isLoading && !data) && Array.from(Array(PlaceholderCount).keys()).map((_,index)=> <PlaceholderComponent key={index}/>)}

                        { data && data.sort(getComparator(order, orderBy)).map((row:any, index:number) => {


                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={index}
                                    className="fadeShow"
                                    style={{animationDelay:(index / 7) + 's'}}
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