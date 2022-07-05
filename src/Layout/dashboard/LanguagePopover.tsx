import {useRef, useState} from 'react';
import Image from 'next/image'
import {alpha} from '@mui/material/styles';
import {Box, IconButton, MenuItem, Stack} from '@mui/material';
import MenuPopover from '$components/MenuPopover';


const language = [
    {
        value: 'Ch',
        label: 'China',
        icon: '/static/icons/China.webp',
    },
    {
        value: 'en',
        label: 'English',
        icon: '/static/icons/English.jpg',
    },
    {
        value: 'fr',
        label: 'French',
        icon: '/static/icons/French.webp',
    },
];


export default function LanguagePopover() {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                    }),
                }}
            >
                <Image height={55} width={80} src={language[0].icon} alt={language[0].label}/>
            </IconButton>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{
                    mt: 1.5,
                    ml: 0.75,
                    width: 180,
                    '& .MuiMenuItem-root': {px: 1, typography: 'body2', borderRadius: 0.75},
                }}
            >
                <Stack spacing={0.75}>
                    {language.map((option) => (
                        <MenuItem key={option.value} selected={option.value === language[0].value}
                                  onClick={() => handleClose()}>
                            <Box component="img" alt={option.label} src={option.icon} sx={{width: 28, mr: 2}}/>

                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>
            </MenuPopover>
        </>
    );
}
