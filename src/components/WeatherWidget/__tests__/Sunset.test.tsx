import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {Sunset} from '../Sunset';

describe('<Sunset/> component:', () => {
    it('should display sunset time correctly', async () => {
        render(
            <WrapperTestComponent>
                <Sunset sunset={123053044993}/>
            </WrapperTestComponent>
        );

        let component = screen.getByText(':23', {exact: false});
        expect(component).toBeInTheDocument();
    });
});
