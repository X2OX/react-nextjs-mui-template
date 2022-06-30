import {Components} from "@mui/material/styles/components";
import {Theme} from "@mui/system";

export default function IconButton(theme: Theme): Components {
	return {
		MuiIconButton: {
			variants: [
				{
					props: {color: 'default'},
					style: {
						'&:hover': {backgroundColor: theme.palette.action.hover}
					}
				},
				{
					props: {color: 'inherit'},
					style: {
						'&:hover': {backgroundColor: theme.palette.action.hover}
					}
				}
			],
			
			styleOverrides: {
				root: {}
			}
		}
	};
}
