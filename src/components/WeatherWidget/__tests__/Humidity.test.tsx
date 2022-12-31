import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {Humidity} from '../Humidity';

describe('<Humidity/> component"', () => {
    it('should display humidity data correctly', () => {
        render(
            <WrapperTestComponent>
                <Humidity humidity={35}/>
            </WrapperTestComponent>
        );

        let component = screen.getByText('35');
        expect(component).toBeInTheDocument();

        component = screen.getByText('%');
        expect(component).toBeInTheDocument();
    });

    it('should display humidity as zero when no data is provided', () => {
        render(
            <WrapperTestComponent>
                <Humidity/>
            </WrapperTestComponent>
        );

        let component = screen.getByText('0');
        expect(component).toBeInTheDocument();

        component = screen.getByText('%');
        expect(component).toBeInTheDocument();
    });
});
