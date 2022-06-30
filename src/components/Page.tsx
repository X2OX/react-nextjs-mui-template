import React, {forwardRef} from 'react';
import {Box} from '@mui/material';
import Head from 'next/head';

interface Props {
	children: React.ReactNode
	title: string
	meta?: React.ReactNode
}

const Page = forwardRef(({children, title = '', meta, ...other}: Props, ref) => (
	<>
		<Head>
			<title>{`${title} | Minimal-UI`}</title>
			{meta}
		</Head>
		
		<Box ref={ref} {...other}>
			{children}
		</Box>
	</>
));


Page.displayName = 'Page';

export default Page;
