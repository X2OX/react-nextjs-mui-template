import {MouseEvent, useRef, useState} from 'react';
import {Avatar, Box, Divider, IconButton, MenuItem, Stack, Typography} from '@mui/material';
import MenuPopover from '$components/MenuPopover';
import useSWR from "swr";
import Link from "$components/Link";
import {RequestData, RequestDataOrdinary} from "$client/request";
import {AccountType} from "$pages/api/account";
import {MenuOptions} from "$pages/api/accountMenu";

export default function AccountPopover() {
    const {data} = useSWR('/api/account', RequestDataOrdinary<AccountType>)
    const {data: menu} = useSWR('/api/accountMenu', RequestData<MenuOptions>)
    const anchorRef = useRef(null);
    const [open, setOpen] = useState<any>(null);
    const handleOpen = (event: MouseEvent<HTMLButtonElement>) => setOpen(event.currentTarget);
    const handleClose = () => setOpen(null);

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    p: 0,
                    ...(open && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: 'rgba(22,28,36,0.76)',
                        },
                    }),
                }}
            >
                <Avatar src={data?.data?.photoURL} alt="photoURL"/>
            </IconButton>

            <MenuPopover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                sx={{
                    p: 0,
                    mt: 1.5,
                    ml: 0.75,
                    '& .MuiMenuItem-root': {
                        typography: 'body2',
                        borderRadius: 0.75,
                    },
                }}
            >
                <Box sx={{my: 1.5, px: 2.5}}>
                    <Typography variant="subtitle2" noWrap>
                        {data?.data?.displayName}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
                        {data?.data?.email}
                    </Typography>
                </Box>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <Stack sx={{p: 1}}>
                    {
                        menu?.data?.map((options) => (
                            <MenuItem key={options.label} onClick={handleClose}>
                                <Link href={options.linkTo} sx={{color: '#212B36', textDecoration: 'none'}}>
                                    {options.label}
                                </Link>
                            </MenuItem>
                        ))
                    }
                </Stack>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <MenuItem onClick={handleClose} sx={{m: 1}}>
                    Logout
                </MenuItem>
            </MenuPopover>
        </>
    );
}
