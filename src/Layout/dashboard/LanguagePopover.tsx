import {useRef, useState} from 'react';
import Image from 'next/image'
import {alpha} from '@mui/material/styles';
import {Box, IconButton, MenuItem, Stack} from '@mui/material';
import MenuPopover from '$components/MenuPopover';

interface lanType {
    value: string
    label: string
    icon: string
}

const language: lanType[] = [
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
    const [item, setItem] = useState('/static/icons/English.jpg');

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={() => setOpen(true)}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                    }),
                }}
            >
                <Image height={55} width={80} src={item} alt={'country'}/>
            </IconButton>

            <MenuPopover
                open={open}
                onClose={() => setOpen(false)}
                anchorEl={anchorRef.current}
                sx={{
                    mt: 1.5,
                    ml: 0.75,
                    width: 180,
                    '& .MuiMenuItem-root': {px: 1, typography: 'body2', borderRadius: 0.75}
                }}>
                <Stack spacing={0.75}>
                    {language.map((option) => (
                        <MenuItem key={option.value} selected={option.value === language[0].value}
                                  onClick={() => {
                                      setItem(option.icon)
                                      setOpen(false)
                                  }}>
                            <Box component="img" alt={option.label} src={option.icon} sx={{width: 28, mr: 2}}/>
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>
            </MenuPopover>
        </>
    );
}
