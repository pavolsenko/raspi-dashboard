import * as React from 'react';
import axios from 'axios';

import {Box} from '@mui/material';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';

import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../WidgetHeader';

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
            <WidgetHeader
                title={'Wiener Linien'}
                subtitle={'Departures'}
                backgroundColor={props.headerBackgroundColor}
            >
                <Box sx={{fontSize: '60px'}}>
                    <DepartureBoardIcon fontSize={'inherit'}/>
                </Box>
            </WidgetHeader>

            <Box sx={{
                display: 'flex',
                flexGrow: '1',
                justifyContent: 'space-between',
                backgroundColor: '#f0f0f0',
            }}>
                {departures[0]?.countdown}
            </Box>
        </Box>
    );
};
