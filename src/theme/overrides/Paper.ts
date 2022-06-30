import {Components} from "@mui/material/styles/components";

export default function Paper(): Components {
	return {
		MuiPaper: {
			defaultProps: {
				elevation: 0
			},
			
			styleOverrides: {
				root: {
					backgroundImage: 'none'
				}
			}
		}
	};
}
