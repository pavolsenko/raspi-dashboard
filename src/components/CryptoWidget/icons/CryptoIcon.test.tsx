import { render, screen } from '@testing-library/react';

import { Bitcoin } from '@app/components/CryptoWidget/icons/Bitcoin';
import { Ethereum } from '@app/components/CryptoWidget/icons/Ethereum';
import { CryptoIcon } from '@app/components/CryptoWidget/icons/CryptoIcon';

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
