'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';

export const Providers = (props: React.PropsWithChildren) => {
    return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};
