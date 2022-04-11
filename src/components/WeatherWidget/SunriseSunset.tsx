import * as React from 'react';
import * as WeatherIcons from 'react-icons/wi';

import {Box} from '@mui/material';

export interface ISunriseSunsetProps {
    sunrise?: number;
    sunset?: number;
}

export const SunriseSunset: React.FC<ISunriseSunsetProps> = (props: ISunriseSunsetProps) => {
    const getTime = (type: 'sunrise' | 'sunset'): string => {
        let date: Date = new Date();

        if (type === 'sunrise' && props.sunrise) {
            date = new Date(props.sunrise);
        } else if (type === 'sunset' && props.sunset) {
            date = new Date(props.sunset);
        }

        let result: string;

        if (date.getHours() < 10) {
            result = '0' + date.getHours().toString();
        } else {
            result = date.getHours().toString();
        }

        if (date.getMinutes() < 10) {
            result += ':0' + date.getMinutes().toString();
        } else {
            result += ':' + date.getMinutes().toString();
        }

        return result;
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <WeatherIcons.WiSunrise/>
            {getTime('sunrise')}

            <WeatherIcons.WiSunset/>
            {getTime('sunset')}
        </Box>
    );
}
