import {useRef, useState} from 'react';
import Iconify from '$components/Iconify';
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from '@mui/material';

export default function UserMoreMenu() {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconButton ref={ref} onClick={() => setIsOpen(true)}>
                <Iconify icon="eva:more-vertical-fill" sx={{width: 20, height: 20}}/>
            </IconButton>

            <Menu
                open={isOpen}
                anchorEl={ref.current}
                onClose={() => setIsOpen(false)}
                PaperProps={{
                    sx: {width: 200, maxWidth: '100%'},
                }}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                <MenuItem sx={{color: 'text.secondary'}}>
                    <ListItemIcon>
                        <Iconify icon="eva:trash-2-outline" sx={{width: 24, height: 24}}/>
                    </ListItemIcon>
                    <ListItemText primary="Delete" primaryTypographyProps={{variant: 'body2'}}/>
                </MenuItem>

                <MenuItem sx={{color: 'text.secondary'}}>
                    <ListItemIcon>
                        <Iconify icon="eva:edit-fill" sx={{width: 24, height: 24}}/>
                    </ListItemIcon>
                    <ListItemText primary="Edit" primaryTypographyProps={{variant: 'body2'}}/>
                </MenuItem>
            </Menu>
        </>
    );
}
