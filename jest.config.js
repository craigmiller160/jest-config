const path = require('path');
const {
    libPatterns,
    createCombinedPattern
} = require('./utils/libsToRecompile');

module.exports = {
    collectCoverage: false,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx}',
        '<rootDir>/node_modules'
    ],
    moduleNameMapper: {
        '.+\\.(css|scss)': 'identity-obj-proxy',
        '.+\\.png$': path.join(__dirname, 'utils', 'fileMock.js')
    },
    modulePaths: [
        '<rootDir>/src'
    ],
    testMatch: [
        '<rootDir>/test/**/*.{test,Spec}.{js,jsx}'
    ],
    moduleDirectories: [
        '<rootDir>/node_modules',
        '<rootDir>/src'
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    modulePathIgnorePatterns: [
        '<rootDir>/.yalc'
    ],
    transformIgnorePatterns: [
        createCombinedPattern(libPatterns),
        'core-js',
        '@babel\/runtime'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    }
};
