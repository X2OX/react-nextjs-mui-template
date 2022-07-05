import {styled} from '@mui/material/styles';
import {IconButton, InputAdornment, OutlinedInput, Toolbar, Tooltip, Typography} from '@mui/material';
import Iconify from '$components/Iconify';
import React from "react";

const RootStyle = styled(Toolbar)(({theme}) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({theme}) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': {width: 320},
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `#919EAB !important`,
        opacity: 0.32
    },
}));

export interface UserListToolbar {
    numSelected: number
    filterName: string
    onFilterName: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function UserListToolbar({numSelected, filterName, onFilterName}: UserListToolbar) {
    return (
        <RootStyle
            sx={{
                ...(numSelected > 0 && {
                    color: 'primary.main',
                    background: 'primary.lighter',
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography component="div" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                <SearchStyle
                    value={filterName}
                    onChange={onFilterName}
                    placeholder="Search user..."
                    startAdornment={
                        <InputAdornment position="start">
                            <Iconify icon="eva:search-fill" sx={{color: 'text.disabled', width: 20, height: 20}}/>
                        </InputAdornment>
                    }
                />
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <Iconify icon="eva:trash-2-fill"/>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <Iconify icon="ic:round-filter-list"/>
                    </IconButton>
                </Tooltip>
            )}
        </RootStyle>
    );
}
