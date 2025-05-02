import { SxProps } from '@mui/material';

export const currentTemperatureBoxStyles: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
};

export const dailyForecastStyles = {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
};

export const dailyForecastItem = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
};

export const dailyForecastUnits: SxProps = {
    fontSize: '18px',
    marginTop: '4px',
    marginLeft: '2px',
};

export const dailyForecastTemperature: SxProps = {
    display: 'flex',
    marginLeft: 1,
};
