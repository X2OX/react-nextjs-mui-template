import {useState} from 'react';
import {Router} from 'next/router'
import {alpha, styled, useTheme} from '@mui/material/styles';
import {Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import Iconify from './Iconify';
import {NavList} from "$Layout/dashboard/nav";
import Link from "$components/Link";

const ListItemIconStyle = styled(ListItemIcon)({
    width: 22,
    height: 22,
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export interface NavItem {
    item: NavList,
    active: boolean,
}

function NavItem({item, active}: NavItem) {
    const theme = useTheme();
    const {title, path, icon, info, children} = item;
    const [open, setOpen] = useState(active);

    const activeRootStyle = {
        color: 'primary.main',
        fontWeight: 'fontWeightMedium',
        bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    };

    const activeSubStyle = {
        color: 'text.primary',
        fontWeight: 'fontWeightMedium',
    };

    if (children) {
        return (
            <>
                <ListItemButton
                    disableGutters
                    onClick={() => setOpen((prev) => !prev)}
                    sx={{
                        height: 48,
                        position: 'relative',
                        textTransform: 'capitalize',
                        color: theme.palette.text.secondary,
                        borderRadius: 5,
                        ...(active && activeRootStyle),
                    }}
                >
                    <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
                    <ListItemText disableTypography primary={title}/>
                    {info && info}
                    <Iconify
                        icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
                        sx={{width: 16, height: 16, ml: 1}}
                    />
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children.map((item) => {
                            const {title} = item;

                            return (
                                <ListItemButton
                                    disableGutters
                                    key={title}
                                    sx={{
                                        ...(active && activeSubStyle),
                                    }}
                                >
                                    <ListItemIconStyle>
                                        <Box
                                            component="span"
                                            sx={{
                                                width: 4,
                                                height: 4,
                                                display: 'flex',
                                                borderRadius: '50%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: 'text.disabled',
                                                transition: (theme) => theme.transitions.create('transform'),
                                                ...(active && {
                                                    transform: 'scale(2)',
                                                    bgcolor: 'primary.main',
                                                }),
                                            }}
                                        />
                                    </ListItemIconStyle>
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Collapse>
            </>
        );
    }

    return (
        <Link href={path} sx={{textDecoration: 'none'}}>
            <ListItemButton
                disableGutters
                sx={{
                    ...theme.typography.body2,
                    height: 48,
                    position: 'relative',
                    textTransform: 'capitalize',
                    color: theme.palette.text.secondary,
                    borderRadius: '12px',
                    ...(active && activeRootStyle),
                }}
            >
                <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
                <ListItemText disableTypography primary={title}/>
                {info && info}
            </ListItemButton>
        </Link>
    );
}

export default function NavSection({navConfig, ...other}: { navConfig: NavList[] }) {
    const [pathname, setPathName] = useState('')
    Router.events.on('routeChangeStart', (args) => {
        setPathName(args)
    })

    return (
        <Box {...other}>
            <List disablePadding sx={{p: 1}}>
                {navConfig.map((item) => (
                    <NavItem key={item.title} item={item} active={!!pathname}/>
                ))}
            </List>
        </Box>
    );
}
