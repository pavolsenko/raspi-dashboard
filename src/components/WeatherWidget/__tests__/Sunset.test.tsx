import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {Sunset} from '../Sunset';

describe('Sunset', () => {
    // TODO: fix for time zones
    it.skip('displays sunset time correctly', () => {
        render(
            <WrapperTestComponent>
                <Sunset sunset={123053044993}/>
            </WrapperTestComponent>
        );

        let component = screen.getByText('03:23');
        expect(component).toBeInTheDocument();
    });
});
