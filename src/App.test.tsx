import { render, screen, waitFor } from '@testing-library/react';

import { App } from '@app/App';

describe('<App/>', function () {
    it('should render app correctly', async () => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText('Bitcoin')).toBeTruthy();
            expect(screen.getByText('Ethereum')).toBeTruthy();
            expect(screen.getByText('Nußdorf')).toBeTruthy();
        });
    });
});
