import { SxProps } from '@mui/material';

export const cryptoStyles: SxProps = {
    display: 'flex',
    gap: 6,
    width: '65%',
    justifyContent: 'space-between',
};

export const cryptoWidgetStyles: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
};

export const cryptoValueStyles: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
};

export const cryptoTrendStyles = (trendValue: number): SxProps => ({
    color: trendValue > 0 ? 'green' : 'red',
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '30px',
    marginTop: 0,
});

export const cryptoValueNumberStyles: SxProps = {
    fontSize: '48px',
};
