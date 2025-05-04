import { SxProps } from '@mui/material';

export const cryptoStyles: SxProps = {
    display: 'flex',
    gap: 6,
    justifyContent: 'space-between',
};

export const cryptoWidgetStyles: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    justifyContent: 'center',
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
    margin: 0,
};

export const cryptoNameStyles: SxProps = {
    fontSize: '24px',
};
