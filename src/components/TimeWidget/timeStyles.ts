import { SxProps, Theme } from '@mui/material';
import {
    DEFAULT_FONT_SECONDARY_SIZE,
    DEFAULT_FONT_SIZE,
} from '@app/helpers/themeHelper';

export const timeStyles: SxProps = {
    fontSize: DEFAULT_FONT_SIZE,
};

export const dateStyles = (theme: Theme): SxProps => ({
    fontSize: DEFAULT_FONT_SECONDARY_SIZE,
    color: theme.palette.secondary.main,
});
