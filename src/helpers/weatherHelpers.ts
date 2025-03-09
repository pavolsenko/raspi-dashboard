import {
    mdiFlashAlertOutline,
    mdiWeatherCloudy,
    mdiWeatherFog,
    mdiWeatherLightning,
    mdiWeatherNight,
    mdiWeatherNightPartlyCloudy,
    mdiWeatherPartlyCloudy,
    mdiWeatherPartlyLightning,
    mdiWeatherPartlyRainy,
    mdiWeatherPouring,
    mdiWeatherRainy,
    mdiWeatherSnowy,
    mdiWeatherSnowyHeavy,
    mdiWeatherSnowyRainy,
    mdiWeatherSunny,
} from '@mdi/js';
import {
    DEFAULT_WEATHER_ICON_ID,
    HOURLY_FORECAST_COUNT,
} from '../config/weatherConfig';

const weatherIcons: Record<string, { day: string; night: string }> = {
    '200': { day: mdiWeatherLightning, night: mdiWeatherLightning },
    '201': { day: mdiWeatherLightning, night: mdiWeatherLightning },
    '202': { day: mdiWeatherLightning, night: mdiWeatherLightning },
    '210': { day: mdiWeatherPartlyLightning, night: mdiWeatherLightning },
    '211': { day: mdiWeatherLightning, night: mdiWeatherLightning },
    '212': { day: mdiFlashAlertOutline, night: mdiFlashAlertOutline },
    '221': { day: mdiWeatherLightning, night: mdiWeatherLightning },
    '230': { day: mdiWeatherLightning, night: mdiWeatherLightning },
    '231': { day: mdiWeatherLightning, night: mdiWeatherLightning },
    '232': { day: mdiWeatherSunny, night: mdiWeatherNight },

    '300': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },
    '301': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },
    '302': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },
    '310': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },
    '311': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },
    '312': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },
    '313': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },
    '314': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },
    '321': { day: mdiWeatherPartlyRainy, night: mdiWeatherRainy },

    '500': { day: mdiWeatherRainy, night: mdiWeatherRainy },
    '501': { day: mdiWeatherRainy, night: mdiWeatherRainy },
    '502': { day: mdiWeatherPouring, night: mdiWeatherPouring },
    '503': { day: mdiWeatherPouring, night: mdiWeatherPouring },
    '504': { day: mdiWeatherPouring, night: mdiWeatherPouring },
    '511': { day: mdiWeatherSnowyRainy, night: mdiWeatherSnowyRainy },
    '520': { day: mdiWeatherPouring, night: mdiWeatherPouring },
    '521': { day: mdiWeatherPouring, night: mdiWeatherPouring },
    '522': { day: mdiWeatherPouring, night: mdiWeatherPouring },
    '531': { day: mdiWeatherPouring, night: mdiWeatherPouring },

    '600': { day: mdiWeatherSnowy, night: mdiWeatherSnowy },
    '601': { day: mdiWeatherSnowy, night: mdiWeatherSnowy },
    '602': { day: mdiWeatherSnowyHeavy, night: mdiWeatherSnowyHeavy },
    '611': { day: mdiWeatherSnowy, night: mdiWeatherSnowy },
    '612': { day: mdiWeatherSnowy, night: mdiWeatherSnowy },
    '613': { day: mdiWeatherSnowy, night: mdiWeatherSnowy },
    '615': { day: mdiWeatherSnowyRainy, night: mdiWeatherSnowyRainy },
    '616': { day: mdiWeatherSnowyRainy, night: mdiWeatherSnowyRainy },
    '620': { day: mdiWeatherSnowyRainy, night: mdiWeatherSnowyRainy },
    '621': { day: mdiWeatherSnowyRainy, night: mdiWeatherSnowyRainy },
    '622': { day: mdiWeatherSnowyRainy, night: mdiWeatherSnowyRainy },

    '701': { day: mdiWeatherFog, night: mdiWeatherFog },
    '711': { day: mdiWeatherFog, night: mdiWeatherFog },
    '721': { day: mdiWeatherFog, night: mdiWeatherFog },
    '731': { day: mdiWeatherFog, night: mdiWeatherFog },
    '741': { day: mdiWeatherFog, night: mdiWeatherFog },
    '751': { day: mdiWeatherFog, night: mdiWeatherFog },
    '761': { day: mdiWeatherFog, night: mdiWeatherFog },
    '762': { day: mdiWeatherFog, night: mdiWeatherFog },
    '771': { day: mdiWeatherFog, night: mdiWeatherFog },
    '781': { day: mdiWeatherFog, night: mdiWeatherFog },

    '800': { day: mdiWeatherSunny, night: mdiWeatherNight },
    '801': { day: mdiWeatherPartlyCloudy, night: mdiWeatherNightPartlyCloudy },
    '802': { day: mdiWeatherPartlyCloudy, night: mdiWeatherNightPartlyCloudy },
    '803': { day: mdiWeatherCloudy, night: mdiWeatherCloudy },
    '804': { day: mdiWeatherCloudy, night: mdiWeatherCloudy },
};

export const getWeatherIcon = (
    iconId: string | undefined,
    isDay: boolean,
): string => {
    if (!iconId) {
        iconId = DEFAULT_WEATHER_ICON_ID;
    }
    return isDay ? weatherIcons[iconId].day : weatherIcons[iconId].night;
};

export const getHourlyForecast = (
    hourly: Record<string, any>[],
): Record<string, any>[] => {
    return hourly
        .slice(2, HOURLY_FORECAST_COUNT * 2 + 2)
        .filter((item: Record<string, any>, index: number) => index % 2 === 0);
};
