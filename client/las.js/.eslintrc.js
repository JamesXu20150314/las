// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    globals: {
        // TODO后面想办法给干掉……
        kwai: true,
        __VERSION__: true
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'eslint:recommended',
    // add your custom rules here
    rules: {
        'arrow-parens': 0,
        'generator-star-spacing': [2, { before: false, after: true }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
        'comma-spacing': [2, { before: false, after: true }],
        'keyword-spacing': 2,
        semi: [2, 'always'],
        quotes: [2, 'single', 'avoid-escape'],
        'no-inner-declarations': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-extra-parens': 2,
        'no-empty': 1,
        complexity: 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
        'spaced-comment': [2, 'always', { exceptions: ['-'] }],
        'space-infix-ops': 2,
        'space-in-parens': 0,
        radix: 2,
        'operator-linebreak': [2, 'before'],
        'one-var-declaration-per-line': 2,
        'max-len': [2, 120, 4],
        'key-spacing': [2, { beforeColon: false, afterColon: true }],
        indent: [2, 4, { SwitchCase: 1 }],
        'no-multiple-empty-lines': [2, { max: 2 }],
        'no-multi-str': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-console': [process.env.NODE_ENV === 'production' ? 2 : 1, { allow: ['warn', 'error', 'debug'] }],
        'comma-dangle': [2, 'never'],
        'no-constant-condition': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-invalid-regexp': 2,
        'no-func-assign': 2,
        'valid-typeof': 2,
        'no-unreachable': 2,
        'no-unexpected-multiline': 2,
        'no-sparse-arrays': 2,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-unused-vars': 2,
        'no-cond-assign': 2,
        'no-native-reassign': 2,
        'no-else-return': 2,
        'no-multi-spaces': 2,
        'block-scoped-var': 2,
        'consistent-return': 2,
        'accessor-pairs': 1,
        'dot-location': [2, 'property'],
        'no-lone-blocks': 2,
        'no-labels': 2,
        'no-extend-native': 2,
        'no-floating-decimal': 2,
        'no-loop-func': 1,
        'no-new-func': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-return-assign': 2,
        'no-redeclare': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 1,
        'no-with': 2,
        'no-warning-comments': [1, { terms: ['fixme'], location: 'start' }],
        curly: [2, 'all'],
        'arrow-spacing': [2],
        'constructor-super': [1],
        'no-class-assign': [2],
        'no-const-assign': [2],
        'no-dupe-class-members': [2],
        'no-duplicate-imports': [2],
        'no-new-symbol': [2],
        'no-restricted-imports': [0],
        'no-this-before-super': [2],
        'no-useless-computed-key': [2],
        'no-useless-constructor': [1],
        'no-useless-rename': [1],
        'no-var': 2,
        'object-shorthand': [0],
        'prefer-arrow-callback': [0],
        'prefer-const': 2,
        'prefer-numeric-literals': [0],
        'prefer-rest-params': [0],
        'prefer-spread': [0],
        'prefer-template': [0],
        'require-yield': [0],
        'rest-spread-spacing': [2],
        'sort-imports': [0],
        'symbol-description': [0],
        'template-curly-spacing': [2],
        'yield-star-spacing': [2],
        eqeqeq: 2,
        'no-control-regex': 2,
        'no-ex-assign': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'use-isnan': 2,
        'valid-jsdoc': [1, { requireReturn: false }],
        'default-case': 0,
        'dot-notation': 2,
        'no-alert': 0,
        'no-caller': 2,
        'no-div-regex': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-new': 0,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-process-env': 0,
        'no-proto': 2,
        'no-script-url': 2,
        'wrap-iife': [2, 'any'],
        yoda: 0,
        strict: [2, 'function'],
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow': 0,
        'no-undef-init': 2,
        'no-undefined': 1,
        'no-use-before-define': 2,
        'handle-callback-err': 2,
        'no-mixed-requires': 1,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 2,
        'no-restricted-modules': 0,
        'no-sync': 0,
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        camelcase: 1,
        'comma-style': [2, 'last'],
        'consistent-this': 0,
        'eol-last': 2,
        'func-names': 0,
        'func-style': 0,
        'max-nested-callbacks': 0,
        'new-cap': 1,
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-lonely-if': 2,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'operator-assignment': 0,
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'consistent-as-needed'],
        'semi-spacing': [2, { before: false, after: true }],
        'sort-vars': 0,
        'space-in-brackets': 0,
        'space-unary-ops': [1, { words: true, nonwords: false }],
        'wrap-regex': 2,
        'max-depth': 0,
        'max-statements': 0,
        'no-plusplus': 0,
        'no-mixed-operators': 0,
        'no-restricted-properties': [
            2,
            { property: 'findIndex' }, // Intended to block usage of Array.prototype.findIndex
            { property: 'find' } // Intended to block usage of Array.prototype.find
        ]
    }
};
