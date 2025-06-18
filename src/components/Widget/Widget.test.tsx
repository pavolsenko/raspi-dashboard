import { render, screen } from '@testing-library/react';

import { Widget } from '@app/components/Widget/Widget';

describe('<Widget />', () => {
    it('should render correctly', () => {
        render(<Widget>test</Widget>);
        expect(screen.getByText('test')).toBeTruthy();
    });
});
