'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-components.production.min.js');
} else {
  module.exports = require('./cjs/react-components.development.js');
}
