import React, {MouseEvent, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import {
    Avatar,
    Button,
    Card,
    Container,
    Stack,
    Table,
    TableBody,
    TableContainer,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
import useSWR from "swr";
import Page from '$components/Page';
import Label from '$components/Label';
import Iconify from '$components/Iconify';
import {RequestData} from "$client/request";
import UserMoreMenu from "$sections/deshboard/user/UserMoreMenu";
import UserListToolbar from "$sections/deshboard/user/UserListToolbar";
import UserListHead, {direction} from "$sections/deshboard/user/UserListHead";
import UserLayout from "$Layout/UserLayout";

export interface Table {
    id: string
    label?: string
    alignRight?: boolean
}

const TABLE_HEAD: Table[] = [
    {id: 'name', label: 'Name', alignRight: false},
    {id: 'country', label: 'Country', alignRight: false},
    {id: 'role', label: 'Role', alignRight: false},
    {id: 'isVerified', label: 'Verified', alignRight: false},
    {id: 'status', label: 'Status', alignRight: false},
    {id: ''},
];

const User = () => {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState<direction>('asc');
    const [selected, setSelected] = useState<any>([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const {data} = useSWR('/api/user', RequestData)

    const handleRequestSort = (event: MouseEvent, property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const selectedID = data?.data?.map((n: any) => n.id) || [];
            setSelected(selectedID);
            return;
        }
        setSelected([]);
    };

    const handleClick = (_: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const selectedIndex: number = selected.indexOf(name);
        let newSelected: any[] = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => setFilterName(event.target.value);

    return (
        <>
            <Page title="User">
                <Container>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            User
                        </Typography>
                        <Button
                            startIcon={<Iconify icon="eva:plus-fill"/>}>
                            New User
                        </Button>
                    </Stack>

                    <Card>
                        <UserListToolbar numSelected={selected.length} filterName={filterName}
                                         onFilterName={handleFilterByName}/>

                        <TableContainer sx={{minWidth: 800}}>
                            <Table>
                                <UserListHead
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={data?.data?.length!}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />
                                <TableBody>
                                    {data?.data?.map((row: any) => {
                                        const {id, name, role, status, country, avatarUrl, isVerified} = row;
                                        const isItemSelected = selected.indexOf(name) !== -1;

                                        return (
                                            <TableRow
                                                hover
                                                key={id}
                                                tabIndex={-1}
                                                role="checkbox"
                                                selected={isItemSelected}
                                                aria-checked={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox checked={isItemSelected}
                                                              onChange={(event) => handleClick(event, name)}/>
                                                </TableCell>
                                                <TableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Avatar alt={name} src={avatarUrl}/>
                                                        <Typography variant="subtitle2" noWrap>
                                                            {name}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="left">{country}</TableCell>
                                                <TableCell align="left">{role}</TableCell>
                                                <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>
                                                <TableCell align="left">
                                                    <Label variant="ghost"
                                                           color={(status === 'banned' && 'error') || 'success'}>
                                                    </Label>
                                                </TableCell>

                                                <TableCell align="right">
                                                    <UserMoreMenu/>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    <TableRow style={{height: 53}}>
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                </TableBody>

                            </Table>
                        </TableContainer>

                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={data?.data?.length || 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />

                    </Card>
                </Container>
            </Page>
        </>
    );
}

User.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <UserLayout>
            {page}
        </UserLayout>
    )
}

export default User
