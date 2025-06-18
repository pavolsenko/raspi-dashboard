import { render, screen, waitFor } from '@testing-library/react';

import { CryptoWidget } from '@app/components/CryptoWidget/CryptoWidget';

describe('<CryptoWidget/>', () => {
    it('should render widget correctly', async () => {
        render(<CryptoWidget />);
        await waitFor(() => {
            expect(screen.getByText('Bitcoin')).toBeTruthy();
            expect(screen.getByText('Ethereum')).toBeTruthy();
        });
    });
});
