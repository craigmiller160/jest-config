_# jest-config

A standard Jest configuration for use in JavaScript and TypeScript projects. It both provides all the core Jest settings, but also recompiles other libraries I've written and published so that their ESModules won't break tests.

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

The NPM command `craig-test` is provided by this library to run jest with all necessary configurations.

## Customizing Transform Ignore Patterns

The `transformIgnorePatterns` may need to be customized or extended in some circumstances. Here is how to do this:

```javascript
const jestConfig = require('@craigmiller160/jest-config');
const {
    libPatterns,
    createCombinedPattern
} = require('@craigmiller160/jest-config/utils/libsToRecompile');

module.exports = {
	...jestConfig,
	transformIgnorePatterns: [
		...jestConfig.transformIgnorePatterns.slice(1),
		createCombinedPattern([
			...libPatterns,
			'@antv\/xflow-core'
		])
	]
};
```