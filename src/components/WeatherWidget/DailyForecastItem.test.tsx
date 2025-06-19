import { render, screen } from '@testing-library/react';

import { DailyForecastItem } from '@app/components/WeatherWidget/DailyForecastItem';

import { mockWeatherResponse } from '../../../__mocks__/mockWeatherResponse';

describe('<DailyForecastItem />', () => {
    it('should render correctly', () => {
        render(
            <DailyForecastItem
                day={mockWeatherResponse.daily[0]}
                dayName={'Monday'}
            />,
        );
        expect(screen.getByText('26')).toBeTruthy();
        expect(screen.getByText('Monday')).toBeTruthy();
    });
});
