_# jest-config

A standard Jest configuration for use in JavaScript projects. It both provides all the core Jest settings, but also recompiles other libraries I've written and published so that their ESModules won't break tests.

## How to Use

First, install this library with `yarn install --dev @craigmiller160/jest-config`. If you need to merge this with other configs, also install the `config-mege` library with `yarn install --dev @craigmiller160/config-merge`.

Then, create a `jest.config.js` file in the root of your project.

If only using this config, use it with:

```javascript
module.exports = require('@craigmiller160/jest-config');
```

If combining it with other configs, whether from libraries or locally, use it with:

```javascript
const jestConfig = require('@craigmiller160/jest-config');
const configMerge = require('@craigmiller160/config-merge');

module.exports = configMerge(jestConfig, moreConfig1, moreConfig2);
```

## How to Run

Simply run the `jest` command to execute the tests using this configuration._
