import {alpha, styled} from '@mui/material/styles';
import React from "react";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

const RootStyle = ({color, variant}: RootStyleProps) => styled('span')(({theme}) => {
	const styleFilled = (color: colorType) => ({
		color: theme.palette[color].contrastText,
		backgroundColor: theme.palette[color].main
	});
	
	const styleOutlined = (color: colorType) => ({
		color: theme.palette[color].main,
		backgroundColor: 'transparent',
		border: `1px solid ${theme.palette[color].main}`
	});
	
	const styleGhost = (color: colorType) => ({
		color: theme.palette[color].dark,
		backgroundColor: alpha(theme.palette[color].main, 0.16)
	});
	
	return {
		height: 22,
		minWidth: 22,
		lineHeight: 0,
		borderRadius: 8,
		cursor: 'default',
		alignItems: 'center',
		whiteSpace: 'nowrap',
		display: 'inline-flex',
		justifyContent: 'center',
		padding: theme.spacing(0, 1),
		color: theme.palette.grey[800],
		fontSize: theme.typography.pxToRem(12),
		fontFamily: theme.typography.fontFamily,
		backgroundColor: theme.palette.grey[300],
		fontWeight: theme.typography.fontWeightBold,
		
		...({
			...(variant === 'filled' && {...styleFilled(color)}),
			...(variant === 'outlined' && {...styleOutlined(color)}),
			...(variant === 'ghost' && {...styleGhost(color)})
		})
	};
});

type colorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
type variantType = 'filled' | 'outlined' | 'ghost'

interface RootStyleProps {
	color: colorType,
	variant: variantType,
}

interface Props extends RootStyleProps {
	children: React.ReactNode,
	sx?: SxProps<Theme>,
}

export default function Label({color = 'primary', variant = 'ghost', children, sx}: Props) {
	const V = RootStyle({color, variant});
	return (
		<V sx={{...sx}}>
			{children}
		</V>
	);
}
