import { render, screen } from '@testing-library/react';

import { Line } from '@app/components/WienerLinienWidget/Line';

describe('<Line/>', () => {
    it('should render a line correctly', async () => {
        render(
            <Line
                line={{
                    name: '69A',
                    direction: 'Hauptbahnhof S U',
                    departures: [
                        '2025-06-18T15:51:50.000+0200',
                        '2025-06-18T16:00:50.000+0200',
                    ],
                }}
            />,
        );

        expect(screen.getByText('69A')).toBeTruthy();
    });
});
