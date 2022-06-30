import React, {useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {Checkbox, FormControlLabel, IconButton, InputAdornment, Stack, TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import Iconify from '$components/Iconify';
import Link from "$components/Link";

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			remember: true,
		},
		onSubmit: () => {
			window.location.href = "/"
		},
	});
	
	const {errors, touched, values, isSubmitting, handleSubmit, getFieldProps} = formik;
	
	const handleShowPassword = () => {
		setShowPassword((show) => !show);
	};
	
	return (
		<FormikProvider value={formik}>
			<Form autoComplete="off" noValidate onSubmit={handleSubmit}>
				<Stack spacing={3}>
					<TextField
						fullWidth
						autoComplete="username"
						type="email"
						label="Email address"
						{...getFieldProps('email')}
						error={Boolean(touched.email && errors.email)}
						helperText={touched.email && errors.email}
					/>
					
					<TextField
						fullWidth
						autoComplete="current-password"
						type={showPassword ? 'text' : 'password'}
						label="Password"
						{...getFieldProps('password')}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleShowPassword} edge="end">
										<Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
									</IconButton>
								</InputAdornment>
							),
						}}
						error={Boolean(touched.password && errors.password)}
						helperText={touched.password && errors.password}
					/>
				</Stack>
				
				<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
					<FormControlLabel
						control={<Checkbox {...getFieldProps('remember')} checked={values.remember}/>}
						label="Remember me"
					/>
					
					<Link href={"/"} variant="subtitle2" underline="hover">
						Forgot password?
					</Link>
				</Stack>
				
				<LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
					Login
				</LoadingButton>
			</Form>
		</FormikProvider>
	);
}
