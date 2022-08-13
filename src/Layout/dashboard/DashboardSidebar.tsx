import {useEffect} from 'react';
import {styled} from '@mui/material/styles';
import {Avatar, Box, Button, Drawer, Link, Stack, Typography} from '@mui/material';
import useResponsive from '$hooks/useResponsive';
import NavSection from '$components/NavSection';
import navConfig from './nav';
import useSWR from "swr";
import {RequestDataOrdinary} from "$client/request";
import {AccountType} from "$pages/api/account";
import {useRouter} from "next/router";
import Logo from "$components/Logo";

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
    },
}));


// @ts-ignore
const AccountStyle = styled('div')(({theme}) => {
    return ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 2.5),
        borderRadius: Number(theme.shape.borderRadius) * 1.5,
        backgroundColor: '#919EAB',
        opacity: 0.8,
    });
});

export interface Sidebar {
    isOpenSidebar: boolean,
    onCloseSidebar: () => void,
}

export default function DashboardSidebar({isOpenSidebar, onCloseSidebar}: Sidebar) {
    const router = useRouter();
    const {data} = useSWR('/api/account', RequestDataOrdinary<AccountType>)
    const isDesktop = useResponsive('up', 'lg');

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [router.query.counter]);

    const renderContent = (
        <>
            <Box sx={{px: 2.5, py: 3, display: 'inline-flex'}}>
                <Logo/>
            </Box>

            <Box sx={{mb: 5, mx: 2.5}}>
                <Link href="#">
                    <AccountStyle>
                        <Avatar src={data?.data?.photoURL} alt="photoURL"/>
                        <Box sx={{ml: 2}}>
                            <Typography variant="subtitle2" sx={{color: 'text.primary'}}>
                                {data?.data?.displayName}
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                {data?.data?.email}
                            </Typography>
                        </Box>
                    </AccountStyle>
                </Link>
            </Box>

            <NavSection navConfig={navConfig}/>

            <Box sx={{flexGrow: 1}}/><Box sx={{px: 2.5, pb: 3, mt: 10}}>

            <Stack alignItems="center" spacing={3} sx={{pt: 5, borderRadius: 2, position: 'relative'}}>
                <Box
                    component="img"
                    src="/static/avatar/avatar.png"
                    sx={{width: 100, position: 'absolute', top: -50}}/>
                <Box sx={{textAlign: 'center'}}>
                    <Typography gutterBottom variant="h6">
                        Get more?
                    </Typography>
                </Box>
                <Button href="/User" target="_blank"
                        variant="contained">
                    Upgrade to Pro
                </Button>
            </Stack>
        </Box>
        </>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: {width: DRAWER_WIDTH},
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: 'background.default',
                            borderRightStyle: 'dashed',
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
}
