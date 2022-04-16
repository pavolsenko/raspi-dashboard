import * as React from 'react';
import axios from 'axios';

import {Box} from '@mui/material';

import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {Time} from '../Time';

export const WienerLinienWidget: React.FC<IWidgetProps> = (props: IWidgetProps) => {
    const [departures, setDepartures] = React.useState<Record<string, any>[]>([]);

    React.useEffect(() => {
        (async () => {
            const result = await axios.get(AppConfig.wienerLinienApiEndpoint, {
                params: {
                    line: 'u1',
                    station: 'Südtiroler Platz',
                    towards: 'Oberlaa',
                },
            });
            setDepartures(result.data.data.monitors[0].lines[0].departures.departure);
        })();
    }, []);

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                width: '100%',
                backgroundColor: props.headerBackgroundColor,
                color: '#ffffff',
                height: '160px',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '16px',
                }}>
                    <Box>
                        <Box sx={{fontSize: '26px', lineHeight: '22px'}}>Wiener Linien</Box>
                        <Box sx={{fontSize: '14px'}}>Departures</Box>
                    </Box>
                    <Time/>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '60px',
                }}>
                    Wiener Linien
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
            }}>
                {departures[0]?.countdown}
            </Box>
        </Box>
    );
};
