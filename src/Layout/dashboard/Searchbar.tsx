import {useState} from 'react';
import {alpha, styled} from '@mui/material/styles';
import {Button, IconButton, Input, InputAdornment, Slide} from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Iconify from '$components/Iconify';


const SearchbarStyle = styled('div')(({theme}) => ({
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: 64,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    padding: theme.spacing(0, 3),
    backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    [theme.breakpoints.up('md')]: {
        height: 92,
        padding: theme.spacing(0, 5),
    },
}));

export default function Searchbar() {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen((prev) => !prev);

    const handleClose = () => setOpen(false);

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div>
                {!isOpen && (
                    <IconButton onClick={handleOpen}>
                        <Iconify icon="eva:search-fill" sx={{width: 20, height: 20}}/>
                    </IconButton>
                )}

                <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
                    <SearchbarStyle>
                        <Input
                            autoFocus
                            fullWidth
                            disableUnderline
                            placeholder="Search…"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Iconify icon="eva:search-fill"
                                             sx={{color: 'text.disabled', width: 20, height: 20}}/>
                                </InputAdornment>
                            }
                            sx={{mr: 1, fontWeight: 'fontWeightBold'}}
                        />
                        <Button variant="contained" onClick={handleClose}>
                            Search
                        </Button>
                    </SearchbarStyle>
                </Slide>
            </div>
        </ClickAwayListener>
    );
}
