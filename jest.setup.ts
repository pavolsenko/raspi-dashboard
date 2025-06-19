import axios from 'axios';
import '@testing-library/jest-dom';

import { mockBitcoinResponse } from './__mocks__/mockBitcoinResponse';
import { mockEthereumResponse } from './__mocks__/mockEthereumResponse';
import { mockWeatherResponse } from './__mocks__/mockWeatherResponse';
import { mockWienerLinienResponse } from './__mocks__/mockWienerLinienResponse';

jest.mock('@app/config/appConfig');
jest.mock('axios');
(axios.get as jest.Mock).mockImplementation((url: string) => {
    if (url === 'https://mocked.vtapi.net/monitor/') {
        return Promise.resolve({ data: mockWienerLinienResponse });
    }
    if (url === 'https://mocked.openweathermap.org/data/3.0/onecall') {
        return Promise.resolve({ data: mockWeatherResponse });
    }
    if (url === 'https://mocked.coins.api/ethereum') {
        return Promise.resolve({ data: mockEthereumResponse });
    }

    if (url === 'https://mocked.coins.api/bitcoin') {
        return Promise.resolve({ data: mockBitcoinResponse });
    }

    return Promise.reject(new Error(`Unknown GET request: ${url}`));
});
