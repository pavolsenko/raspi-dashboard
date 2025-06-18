import { render, screen } from '@testing-library/react';

import { CryptoTrendIcon } from '@app/components/CryptoWidget/icons/CryptoTrendIcon';

describe('<CryptoTrendIcon/>', () => {
    it('should render increase', () => {
        render(<CryptoTrendIcon trendValue={2.4} />);
        expect(screen.getByRole('presentation')).toBeTruthy();
    });

    it('should render decrease', () => {
        render(<CryptoTrendIcon trendValue={-2.4} />);
        expect(screen.getByRole('presentation')).toBeTruthy();
    });
});
