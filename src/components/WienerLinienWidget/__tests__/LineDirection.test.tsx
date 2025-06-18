import { render, screen } from '@testing-library/react';

import { LineDirection } from '@app/components/WienerLinienWidget/LineDirection';

describe('<LineDirection />', () => {
    it('should render line direction correctly', () => {
        render(<LineDirection direction={'Nußdorf, Beethovengang'} />);
        expect(screen.getByText('Nußdorf')).toBeTruthy();
    });
});
