const path = require('path');
const {
    libPatterns,
    createCombinedPattern
} = require('./utils/libsToRecompile');

module.exports = {
    collectCoverage: false,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
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
        '<rootDir>/test/**/*.{test,Spec}.{js,jsx,ts,tsx}'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        url: 'http://localhost'
    },
    modulePathIgnorePatterns: [
        '<rootDir>/.yalc'
    ],
    transform: {
        '^.+\\.js$': '@swc/jest',
        '^.+\\.ts$': [
            '@swc/jest',
            {
                jsc: {
                    parser: {
                        syntax: 'typescript'
                    }
                }
            }
        ],
        '^.+\\.jsx$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic'
                        }
                    }
                }
            }
        ],
        '^.+\\.tsx$': [
            '@swc/jest',
            {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: true
                    },
                    transform: {
                        react: {
                            runtime: 'automatic'
                        }
                    }
                }
            }
        ]
    }
};
