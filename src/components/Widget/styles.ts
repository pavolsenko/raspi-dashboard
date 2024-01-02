import {SxProps} from '@mui/material';

export const errorStyles: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
    width: '100%',
};

export const widgetStyles: SxProps = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    overflow: 'hidden',
};

export const widgetHeaderStyles = (backgroundColor?: string): SxProps => ({
    width: '100%',
    height: '165px',
    color: '#ffffff',
    backgroundColor,
});

export const widgetHeaderTitleWrapperStyles = (textAlign?: string): SxProps => ({
    margin: '16px 16px 0 16px',
    textAlign: textAlign ?? 'center',
});

export const widgetHeaderTitleStyles: SxProps = {
    fontSize: '24px',
    lineHeight: '22px',
};

export const widgetHeaderSubtitleStyles: SxProps = {
    fontSize: '12px',
};

export const widgetHeaderContentStyles: SxProps = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
};
