import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {Wind} from '../Wind';

describe('<Wind/> component:', () => {
    it('should display wind data correctly', () => {
        render(
            <WrapperTestComponent>
                <Wind
                    direction={23}
                    speed={12.4}
                />
            </WrapperTestComponent>
        );

        let component = screen.getByText('12.4');
        expect(component).toBeInTheDocument();

        component = screen.getByText('m/s');
        expect(component).toBeInTheDocument();
    });
});
