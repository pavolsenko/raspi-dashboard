import { render, screen } from '@testing-library/react';

import { DailyForecast } from '@app/components/WeatherWidget/DailyForecast';

import { mockWeatherResponse } from '../../../__mocks__/mockWeatherResponse';

describe('<DailyForecast />', () => {
    it('should render correctly', () => {
        render(<DailyForecast days={mockWeatherResponse.daily.slice(0, 3)} />);
        expect(screen.getByText('26')).toBeTruthy();
        expect(screen.getAllByRole('presentation')).toHaveLength(3);
    });
});
