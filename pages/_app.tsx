import {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import React from "react";

import theme from '../src/theme/theme';
import '../src/theme/styles.css'

const App = ({Component, pageProps}: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;