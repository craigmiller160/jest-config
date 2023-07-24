#!/usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('cross-env', ['NODE_ENV=test', 'jest', ...process.argv.slice(2)], {
    stdio: 'inherit'
});
if (result.error) {
    console.error(result.error);
    process.exit(1);
}

process.exit(result.status);
