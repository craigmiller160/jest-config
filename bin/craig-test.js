#!/usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('cross-env', ['NODE_ENV=test', 'jest', ...process.argv.slice(2)], {
    stdio: 'inherit'
});

process.exit(result.status);
