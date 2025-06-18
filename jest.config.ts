import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: '.coverage',
    collectCoverageFrom: [
        './src/**',
        '!**/__fixtures__/**',
        '!./src/config/**',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
