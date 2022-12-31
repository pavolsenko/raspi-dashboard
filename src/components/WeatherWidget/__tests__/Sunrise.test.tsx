import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {Sunrise} from '../Sunrise';

describe('<Sunrise/> component:', () => {
    it('should display sunrise time correctly', async () => {
        render(
            <WrapperTestComponent>
                <Sunrise sunrise={1230044993}/>
            </WrapperTestComponent>
        );

        let component = screen.getByText(':09', {exact: false});
        expect(component).toBeInTheDocument();
    });
});
