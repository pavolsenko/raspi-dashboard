import { render, screen } from '@testing-library/react';

import { ErrorCloud } from '@app/components/Widget/ErrorCloud';

describe('<Error />', () => {
    it('should render correctly', () => {
        render(<ErrorCloud />);
        expect(screen.getByRole('presentation')).toBeTruthy();
    });
});
