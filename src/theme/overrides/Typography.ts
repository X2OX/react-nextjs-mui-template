import {Components} from "@mui/material/styles/components";
import {Theme} from "@mui/system";

export default function Typography(theme: Theme): Components {
	return {
		MuiTypography: {
			styleOverrides: {
				paragraph: {
					marginBottom: theme.spacing(2)
				},
				gutterBottom: {
					marginBottom: theme.spacing(1)
				}
			}
		}
	};
}
