import { getRandomHexColor, getTheme } from '@app/helpers/themeHelper';
import { Theme } from '@mui/material';

describe('themeHelper', () => {
    describe('getTheme', () => {
        it('should create a theme', () => {
            const theme: Theme = getTheme();
            expect(theme.palette.primary.main).toEqual('#d3d8d9');
        });
    });
    describe('getRandomHexColor', () => {
        it('should create a hex color', () => {
            const color: string = getRandomHexColor();
            expect(color).toMatch(/^#(?:[0-9a-f]{3}){1,2}$/);
        });
    });
});
