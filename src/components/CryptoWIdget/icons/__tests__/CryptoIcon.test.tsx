import { render, screen } from '@testing-library/react';

import { Bitcoin } from '@app/components/CryptoWIdget/icons/Bitcoin';
import { Ethereum } from '@app/components/CryptoWIdget/icons/Ethereum';
import { CryptoIcon } from '@app/components/CryptoWIdget/icons/CryptoIcon';

describe('<CryptoIcon />', () => {
    it('should render bitcoin correctly', () => {
        render(
            <CryptoIcon>
                <Bitcoin />
            </CryptoIcon>,
        );
        expect(screen.getByRole('presentation')).toBeTruthy();
    });

    it('should render ethereum correctly', () => {
        render(
            <CryptoIcon>
                <Ethereum />
            </CryptoIcon>,
        );
        expect(screen.getByRole('presentation')).toBeTruthy();
    });
});
