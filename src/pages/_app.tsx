import * as React from 'react';
import {ReactElement, ReactNode} from 'react';
import {AppProps} from 'next/app';
import {NextPage} from "next";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "$theme/theme";
import {CacheProvider, EmotionCache} from "@emotion/react";
import Head from "next/head";
import createEmotionCache from "$theme/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

interface MyAppProps extends AppProps {
    Component: NextPageWithLayout
    emotionCache?: EmotionCache;
}

export default function MyApp({Component, pageProps, emotionCache = clientSideEmotionCache}: MyAppProps) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
        </CacheProvider>
    )
}
