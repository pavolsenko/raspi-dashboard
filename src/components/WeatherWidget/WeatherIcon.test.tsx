import { render, screen } from '@testing-library/react';

import { WeatherIcon } from '@app/components/WeatherWidget/WeatherIcon';

describe('<WeatherIcon />', () => {
    it('should render correct icon', () => {
        render(<WeatherIcon iconId={701} />);
        expect(screen.getByRole('presentation')).toBeTruthy();
    });

    it('should render no icon if ID is not provided', () => {
        render(<WeatherIcon />);
        expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });
});
