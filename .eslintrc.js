module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'standard',
        'eslint:recommended',
        'react-app',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'react-app/jest'
    ],
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    rules: {
        indent: [
            'error', 4
        ],
        'no-console': 'warn'
    }
}
