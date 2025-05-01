import { createTheme } from '@mui/material';

export const DISPLAY_HEIGHT = 740;
export const DISPLAY_WIDTH = 1280;
export const DEFAULT_FONT_SIZE = '112px';
export const DEFAULT_FONT_SECONDARY_SIZE = '36px';

export function getTheme() {
    return createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#d3d8d9',
            },
            secondary: {
                main: '#8d8e91',
            },
        },
        typography: {
            body1: {
                lineHeight: 1,
                fontSize: DEFAULT_FONT_SIZE,
            },
            body2: {
                marginTop: 8,
                lineHeight: 1.2,
                fontSize: DEFAULT_FONT_SECONDARY_SIZE,
            },
        },
    });
}

export function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, '0')}`;
}
