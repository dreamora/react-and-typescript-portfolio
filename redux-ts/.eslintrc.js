module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:fp/recommended"
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        "fp"
    ],
    rules: {
        "fp/no-arguments": "error",
        "fp/no-class": "error",
        "fp/no-delete": "error",
        "fp/no-events": "error",
        "fp/no-get-set": "error",
        "fp/no-let": "error",
        "fp/no-loops": "error",
        "fp/no-mutating-assign": "error",
        "fp/no-mutating-methods": "error",
        "fp/no-mutation": "error",
        "fp/no-nil": "error",
        "fp/no-proxy": "error",
        "fp/no-rest-parameters": "error",
        "fp/no-this": "error",
        "fp/no-throw": "error",
        "fp/no-unused-expression": "error",
        "fp/no-valueof-field": "error",
        "no-var": "error"
    }
}
