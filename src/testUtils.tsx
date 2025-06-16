import { PropsWithChildren } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';

export function WrapperTestComponent(props: Readonly<PropsWithChildren>) {
    return (
        <ThemeProvider theme={createTheme()}>{props.children}</ThemeProvider>
    );
}
