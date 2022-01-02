#!/usr/bin/env node

const spawn = require('cross-spawn');

spawn.sync('cross-env', ['NODE_ENV=test', 'jest', ...process.argv.slice(2)], {
    stdio: 'inherit'
});
