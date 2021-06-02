const path = require("path");

module.exports = {
  resolve: {
    alias: {
      svelte: path.resolve(__dirname, "node_modules"),
    },
    extensions: [".js"],
  },
};
