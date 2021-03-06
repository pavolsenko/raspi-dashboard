import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {Sunrise} from '../Sunrise';

describe('Sunrise', () => {
    it('displays sunrise time correctly', () => {
        render(
            <WrapperTestComponent>
                <Sunrise sunrise={1230044993}/>
            </WrapperTestComponent>
        );

        let component = screen.getByText('16:09');
        expect(component).toBeInTheDocument();
    });
});
