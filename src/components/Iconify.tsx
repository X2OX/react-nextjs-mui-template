import {Icon, IconifyIcon} from '@iconify/react';
import {Box, SxProps} from '@mui/material';
import React from "react";

interface Props {
    icon: IconifyIcon | string,
    sx?: SxProps,
}

export default function Iconify({icon, sx, ...other}: Props) {
    return <Box component={Icon} icon={icon} sx={{...sx}} {...other} />;
}
