import {styled} from '@mui/material/styles';
import {Card, Container, Typography} from '@mui/material';
import useResponsive from '../hooks/useResponsive';
import Page from '$components/Page';
import Logo from '$components/Logo';
import RegisterForm from '$sections/auth/register';
import AuthSocial from '$sections/auth/AuthSocial';
import Link from '$components/Link';

const RootStyle = styled('div')(({theme}) => ({
	[theme.breakpoints.up('md')]: {
		display: 'flex',
	},
}));

const HeaderStyle = styled('header')(({theme}) => ({
	top: 0,
	zIndex: 9,
	lineHeight: 0,
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	position: 'absolute',
	padding: theme.spacing(3),
	justifyContent: 'space-between',
	[theme.breakpoints.up('md')]: {
		alignItems: 'flex-start',
		padding: theme.spacing(7, 5, 0, 7),
	},
}));

const SectionStyle = styled(Card)(({theme}) => ({
	width: '100%',
	maxWidth: 464,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({theme}) => ({
	maxWidth: 480,
	margin: 'auto',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	padding: theme.spacing(12, 0),
}));


export default function Register() {
	const smUp = useResponsive('up', 'sm');
	const mdUp = useResponsive('up', 'md');

	return (
		<Page title="Register">
			<RootStyle>
				<HeaderStyle>
					<Logo/>
					{smUp && (
						<Typography variant="body2" sx={{mt: {md: -2}}}>
							Already have an account? {''}
							<Link variant="subtitle2" href="/login">
								Login
							</Link>
						</Typography>
					)}
				</HeaderStyle>

				{mdUp && (
					<SectionStyle>
						<Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
							Manage the job more effectively with Minimal
						</Typography>
						<img alt="register" src="/static/illustrations/illustration_register.png"/>
					</SectionStyle>
				)}

				<Container>
					<ContentStyle>
						<Typography variant="h4" gutterBottom>
							Get started absolutely free.
						</Typography>

						<Typography sx={{color: 'text.secondary', mb: 5}}>Free forever. No credit card
							needed.</Typography>

						<AuthSocial/>

						<RegisterForm/>

						<Typography variant="body2" align="center" sx={{color: 'text.secondary', mt: 3}}>
							By registering, I agree to Minimal&nbsp;
							<Link underline="always" color="text.primary" href="#">
								Terms of Service
							</Link>
							{''}and{''}
							<Link underline="always" color="text.primary" href="#">
								Privacy Policy
							</Link>
							.
						</Typography>

						{!smUp && (
							<Typography variant="body2" sx={{mt: 3, textAlign: 'center'}}>
								Already have an account?{' '}
								<Link variant="subtitle2" href="/Login">
									Login
								</Link>
							</Typography>
						)}
					</ContentStyle>
				</Container>
			</RootStyle>
		</Page>
	);
}
