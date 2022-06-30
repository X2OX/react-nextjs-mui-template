import {Components} from "@mui/material/styles/components";
import {customShadows} from "$theme/shadows";

export default function Autocomplete(): Components {
	return {
		MuiAutocomplete: {
			styleOverrides: {
				paper: {
					boxShadow: customShadows.z20
				}
			}
		}
	};
}
