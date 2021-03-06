'use strict';

module.exports = {
  rules: {
    'no-primitive-constructors': require('./no-primitive-constructors'),
    'no-to-warn-dev-within-to-throw': require('./no-to-warn-dev-within-to-throw'),
    'warning-and-invariant-args': require('./warning-and-invariant-args'),
    'react-hooks/rules-of-hooks': require('eslint-plugin-react-hooks'),
    'react-hooks/exhaustive-deps': require('eslint-plugin-react-hooks'),
  },
};
