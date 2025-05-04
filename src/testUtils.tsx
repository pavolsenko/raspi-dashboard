import { PropsWithChildren } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';

export function WrapperTestComponent(props: PropsWithChildren<any>) {
    return (
        <ThemeProvider theme={createTheme()}>{props.children}</ThemeProvider>
    );
}
