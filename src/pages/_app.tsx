import * as React from 'react';
import {ReactElement, ReactNode} from 'react';
import ThemeProvider from '$theme/ThemeProvider'
import {AppProps} from 'next/app';
import {NextPage} from "next";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return (
        <ThemeProvider>
            {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
    )
}
