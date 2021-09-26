module.exports = {
    parserOptions: {
        project: './tsconfig.json',
        parser: 'babel-eslint'
    },
    extends: [
        'react-app',
        'standard-with-typescript'
    ],
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    rules: {
        indent: [
            'error', 4
        ],
        '@typescript-eslint/indent': [
            'error', 4
        ],
        'no-console': 'warn',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
    }
}
