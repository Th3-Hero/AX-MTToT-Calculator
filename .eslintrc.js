module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte']
    },
    plugins: [
        'svelte3',
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    env: {
        es6: true,
        browser: true
    },
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    rules: {
        'arrow-spacing': 'error',
        'complexity': ['error', 10],
        'curly': 'error',
        'indent': ['error', 4],
        'max-depth': ['error', 3],
        'max-len': ['error', {
            'code': 140
        }],
        'no-console': 'error',
        'no-else-return': 'error',
        'no-extra-parens': 'error',
        'no-trailing-spaces': 'error',
        'no-unused-vars': 'error',
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'semi': ['error', 'always'],
        'sort-imports': ['error', {
            ignoreCase: true,
        }],
        'space-before-function-paren': [2, {
         'named': 'never',
         'anonymous': 'never',
         'asyncArrow': 'always'
        }],
        'template-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-readonly': 'error'
    },
    settings: {
        'svelte3/typescript': true,
        'svelte3/ignore-styles': () => true
    }
}
