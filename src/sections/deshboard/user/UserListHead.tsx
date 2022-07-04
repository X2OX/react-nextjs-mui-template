import {Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material';
import React, {MouseEvent} from "react";
import {Table} from "$pages/User";

export type direction = 'asc' | 'desc'
export type SortDirection = 'asc' | 'desc' | undefined

export interface UserListHead {
    order: SortDirection | direction
    orderBy: string
    rowCount: number
    headLabel: Table[]
    numSelected: number
    onRequestSort: (event: React.MouseEvent<HTMLButtonElement>, property: string) => void
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
};

export default function UserListHead(
    {
        order,
        orderBy,
        rowCount,
        headLabel,
        numSelected,
        onRequestSort,
        onSelectAllClick,
    }: UserListHead) {
    const createSortHandler = (property: string) => (event: MouseEvent<HTMLButtonElement>) => onRequestSort(event, property);

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {headLabel?.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            hideSortIcon
                            active={orderBy === headCell?.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell?.id)}
                        >
                            {orderBy === headCell?.id ? (
                                <Box
                                    sx={{...visuallyHidden}}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
