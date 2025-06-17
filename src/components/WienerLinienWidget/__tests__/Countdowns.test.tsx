import { render } from '@testing-library/react';

import { Countdowns } from '@app/components/WienerLinienWidget/Countdowns';

describe('<Countdowns/>', () => {
    it('should render countdowns correctly', () => {
        render(
            <Countdowns
                departures={[
                    '2025-06-17T15:25:29.000+0200',
                    '2025-06-17T15:34:27.000+0200',
                    '2025-06-17T15:40:43.000+0200',
                    '2025-06-17T15:47:10.000+0200',
                    '2025-06-17T15:53:50.000+0200',
                    '2025-06-17T16:00:30.000+0200',
                    '2025-06-17T16:07:10.000+0200',
                    '2025-06-17T16:13:50.000+0200',
                    '2025-06-17T16:20:30.000+0200',
                    '2025-06-17T16:27:10.000+0200',
                    '2025-06-17T16:33:50.000+0200',
                ]}
            />,
        );
    });
});
