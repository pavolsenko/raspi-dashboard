import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {Rain} from '../Rain';

describe('<Rain/> component:', () => {
    it('should display rain data correctly', () => {
        render(
            <WrapperTestComponent>
                <Rain percentage={0.23}/>
            </WrapperTestComponent>
        );

        let component = screen.getByText('23');
        expect(component).toBeInTheDocument();

        component = screen.getByText('%');
        expect(component).toBeInTheDocument();
    });
});
