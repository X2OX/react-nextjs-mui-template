import {Theme} from "@mui/system";
import {customShadows} from "$theme/shadows";

export default function Button(theme: Theme) {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						boxShadow: 'none'
					}
				},
				sizeLarge: {
					height: 48
				},
				containedInherit: {
					color: theme.palette.grey[800],
					boxShadow: customShadows.z8,
					'&:hover': {
						backgroundColor: theme.palette.grey[400]
					}
				},
				containedPrimary: {
					boxShadow: customShadows.primary
				},
				containedSecondary: {
					boxShadow: customShadows.secondary
				},
				outlinedInherit: {
					border: `1px solid ${theme.palette.grey[500_32]}`,
					'&:hover': {
						backgroundColor: theme.palette.action.hover
					}
				},
				textInherit: {
					'&:hover': {
						backgroundColor: theme.palette.action.hover
					}
				}
			}
		}
	};
}
