import { formatDateWithOffset } from '@app/helpers/timeHelpers';
import { render, screen } from '@testing-library/react';

import { Countdowns } from '@app/components/WienerLinienWidget/Countdowns';

describe('<Countdowns/>', () => {
    it('should render countdowns correctly', () => {
        const now = new Date();
        const twoMinutesLater = new Date(now.getTime() + 2 * 60 * 1000 + 3000);
        const fourMinutesLater = new Date(now.getTime() + 4 * 60 * 1000 + 3000);

        render(
            <Countdowns
                departures={[
                    formatDateWithOffset(twoMinutesLater),
                    formatDateWithOffset(fourMinutesLater),
                ]}
            />,
        );
        expect(screen.getByText('2')).toBeTruthy();
        expect(screen.getByText('4')).toBeTruthy();
    });

    it('should render zero countdown with icon', () => {
        const now = new Date();
        const fourMinutesLater = new Date(now.getTime() + 4 * 60 * 1000 + 3000);

        render(
            <Countdowns
                departures={[
                    formatDateWithOffset(new Date(now.getTime() + 3000)),
                    formatDateWithOffset(fourMinutesLater),
                ]}
            />,
        );
        expect(screen.getByRole('presentation')).toBeTruthy();
        expect(screen.getByText('4')).toBeTruthy();
    });
});
