import { render, screen } from '@testing-library/react';

import { CryptoValue } from '@app/components/CryptoWidget/CryptoValue';

describe('<CryptoValue />', () => {
    it('should render correctly when increase', () => {
        render(<CryptoValue value={2222} trendValue={2.1} name={'Bitcoin'} />);
        expect(screen.getByText('€2222.00')).toBeTruthy();
        expect(screen.getByText('2.10%')).toBeTruthy();
        expect(screen.getByText('Bitcoin')).toBeTruthy();
    });

    it('should render correctly when decrease', () => {
        render(
            <CryptoValue value={3333} trendValue={-2.53333} name={'Bitcoin'} />,
        );
        expect(screen.getByText('€3333.00')).toBeTruthy();
        expect(screen.getByText('2.53%')).toBeTruthy();
        expect(screen.getByText('Bitcoin')).toBeTruthy();
    });
});
