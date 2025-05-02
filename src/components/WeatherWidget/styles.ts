import { SxProps, Theme } from '@mui/material';

export const currentTemperatureBoxStyles: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
};

export const dailyForecastStyles = (theme: Theme): SxProps => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(6),
});

export const dailyForecastItem = (theme: Theme): SxProps => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(1),
});
