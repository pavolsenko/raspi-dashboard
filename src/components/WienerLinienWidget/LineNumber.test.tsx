import { fireEvent, render, screen } from '@testing-library/react';

import { LineNumber } from '@app/components/WienerLinienWidget/LineNumber';

describe('<LineNumber/>', () => {
    it('should render line number', () => {
        render(<LineNumber value={'3A'} />);
        expect(screen.getByText('3A')).toBeTruthy();
    });

    it('should trigger onClick', () => {
        const onClick = jest.fn();
        render(<LineNumber value={'22A'} onClick={onClick} />);
        const component = screen.getByText('22A');
        fireEvent.click(component);
        expect(onClick).toHaveBeenCalled();
    });
});
