/**
 * Copyright (c) ReactX and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');
const spawn = require('child_process').spawn;

const extension = process.platform === 'win32' ? '.cmd' : '';

// sizebot public_repo token (this is publicly visible on purpose)
const token = 'df9c2b50986c39e981' + '6bd5f83a160e524c09b298';
spawn(path.join('node_modules', '.bin', 'danger-ci' + extension), [], {
  // Allow colors to pass through
  stdio: 'inherit',
  env: {
    ...process.env,
    DANGER_GITHUB_API_TOKEN: token,
  },
}).on('close', function(code) {
  if (code !== 0) {
    console.error('Danger failed');
  } else {
    console.log('Danger passed');
  }

  process.exit(code);
});
