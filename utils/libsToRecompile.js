const libPatterns = [
    '@craigmiller160\/react-test-utils',
    'fp-ts\/es6',
    '@craigmiller160\/ajax-api',
    '@craigmiller160\/ajax-api-fp-ts',
    '@craigmiller160\/react-protected-route',
    '@craigmiller160\/react-hook-form-material-ui',
    '@craigmiller160\/ajax-error-handler',
    '@craigmiller160\/react-material-ui-common',
    '@craigmiller160\/ts-functions\/es',
    '@craigmiller160\/react-keycloak',
    'lodash-es',
    'nanoid'
];

const createCombinedPattern = (patterns) =>
    `node_modules\/(?!${patterns.join('|')})`;

module.exports = {
    libPatterns,
    createCombinedPattern
};
