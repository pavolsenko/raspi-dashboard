import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: [
            'build/**',
            'node_modules/**',
            '**/*.config.ts',
            '**/*.d.ts',
            'main.tsx',
        ],
    },

    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: process.cwd(),
            },
        },
        rules: {},
    },
];
