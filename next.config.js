const path = require('path');

/**
 * Next.js config to ensure Turbopack resolves the project root correctly.
 */
module.exports = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};
