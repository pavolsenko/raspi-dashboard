import { render, screen } from '@testing-library/react';

import { CurrentTemperature } from '@app/components/WeatherWidget/CurrentTemperature';

describe('<CurrentTemperature/>', () => {
    it('should render temperature correctly', () => {
        render(<CurrentTemperature value={22} />);
        expect(screen.getByText('22')).toBeTruthy();
        expect(screen.getByText('°C')).toBeTruthy();
    });

    it('should render empty temperature', () => {
        render(<CurrentTemperature />);
        expect(screen.getByText('--')).toBeTruthy();
        expect(screen.getByText('°C')).toBeTruthy();
    });
});
