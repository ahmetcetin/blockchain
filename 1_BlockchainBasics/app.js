const BlockClass = require('./block.js');

const block = new BlockClass.Block('Test Block');

block
  .generateHash()
  .then((result) => {
    console.log(`Block Hash: ${result.hash}`);
    console.log(`Block: ${JSON.stringify(result)}`);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * Step 3: Run the application in node.js
 *
 */

// From the terminal: cd into Project folder
// From the terminal: Run node app.js to run the code
