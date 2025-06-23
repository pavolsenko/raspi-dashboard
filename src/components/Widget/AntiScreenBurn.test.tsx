import { render, screen } from '@testing-library/react';

import { AntiScreenBurn } from '@app/components/Widget/AntiScreenBurn';
import { useState } from 'react';

jest.mock('react', () => {
    const actual = jest.requireActual('react');
    return {
        ...actual,
        useState: jest.fn(),
    };
});

describe('<AntiScreenBurn />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        (useState as jest.Mock).mockImplementation(() => 1);
        render(<AntiScreenBurn />);
        expect(screen.getByTestId('AntiScreenBurn')).toBeTruthy();
    });
});
