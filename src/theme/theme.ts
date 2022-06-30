import {createTheme} from '@mui/material/styles';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import {Theme} from "@mui/system";
import ComponentsOverrides from "$theme/overrides";


const genTheme = (): Theme => {
	const t = createTheme({
		palette,
		shape: {borderRadius: 8},
		typography,
		shadows,
	})
	t.components = ComponentsOverrides(t)
	
	return t
}

// Create a theme instance.
const theme = genTheme()

export default theme;




