import {Components} from "@mui/material/styles/components";
import {Theme} from "@mui/system";

export default function Lists(theme: Theme): Components {
	return {
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					color: 'inherit',
					minWidth: 'auto',
					marginRight: theme.spacing(2)
				}
			}
		},
		MuiListItemAvatar: {
			styleOverrides: {
				root: {
					minWidth: 'auto',
					marginRight: theme.spacing(2)
				}
			}
		},
		MuiListItemText: {
			styleOverrides: {
				root: {
					marginTop: 0,
					marginBottom: 0
				},
				multiline: {
					marginTop: 0,
					marginBottom: 0
				}
			}
		}
	};
}
