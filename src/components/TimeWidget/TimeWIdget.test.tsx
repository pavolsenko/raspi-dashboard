import { render, screen } from '@testing-library/react';

import { TimeWidget } from '@app/components/TimeWidget/TimeWidget';

describe('<TimeWidget/>', () => {
    it('should render time correctly', () => {
        render(<TimeWidget />);
        expect(
            screen.getByText(
                new Date().toLocaleDateString('default', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }),
            ),
        ).toBeTruthy();
    });
});
