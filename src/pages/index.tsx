import {useState} from "react";
import type {NextPage} from 'next';
import DashboardNavbar from "$Layout/dashboard/DashboardNavbar";
import DashboardSidebar from "$Layout/dashboard/DashboardSidebar";
import {styled} from "@mui/material/styles";
import {Outlet} from "@mui/icons-material";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({theme}) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

const Home: NextPage = () => {
    const [open, setOpen] = useState(false);
    return (
        <RootStyle>
            <DashboardNavbar onOpenSidebar={() => setOpen(true)}/>
            <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)}/>
            <MainStyle>
                <Outlet/>
            </MainStyle>
        </RootStyle>
    )
}
// @ts-ignore
export default Home
