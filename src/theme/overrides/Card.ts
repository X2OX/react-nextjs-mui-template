import {Theme} from "@mui/system";
import {Shadows} from "@mui/material/styles/shadows";
import {Components} from "@mui/material/styles/components";

export default function Card(theme: Theme): Components {
	return {
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: (theme.shadows as Shadows)[2],
					borderRadius: Number(theme.shape.borderRadius) * 2,
					position: 'relative',
					zIndex: 0, // Fix Safari overflow: hidden with border radius
				},
			},
		},
		MuiCardHeader: {
			defaultProps: {
				titleTypographyProps: {variant: 'h6'},
				subheaderTypographyProps: {variant: 'body2'},
			},
			styleOverrides: {
				root: {
					padding: theme.spacing(3, 3, 0),
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: theme.spacing(3),
				},
			},
		},
	};
}
