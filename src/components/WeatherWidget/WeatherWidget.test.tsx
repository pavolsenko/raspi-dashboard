import { render, screen, waitFor } from '@testing-library/react';

import { WeatherWidget } from '@app/components/WeatherWidget/WeatherWidget';

describe('<WeatherWidget />', () => {
    it('should render correctly', async () => {
        render(<WeatherWidget />);
        await waitFor(() => {
            expect(screen.getByText('25')).toBeTruthy();
            expect(screen.getAllByText('°C')).toHaveLength(4);
            expect(screen.getAllByRole('presentation')).toHaveLength(4);
        });
    });
});
