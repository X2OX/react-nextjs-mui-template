import {Components} from "@mui/material/styles/components";
import {Theme} from "@mui/system";

export default function Tooltip(theme: Theme): Components {
	return {
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					backgroundColor: theme.palette.grey[800]
				},
				arrow: {
					color: theme.palette.grey[800]
				}
			}
		}
	};
}
