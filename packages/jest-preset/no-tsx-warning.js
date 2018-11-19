const chalk = require('chalk');

console.error(chalk.red('\n[@roybailey/jest-preset] ERROR:'), `You must use '@roybailey/jest-preset/react' if processing \`jsx\` or \`tsx\` files.\n`);
throw new Error('Invalid jest-preset for files of type `jsx` or `tsx`');

module.exports = {
  process() {
    return false;
  },
};
