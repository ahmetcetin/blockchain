const SHA256 = require('crypto-js/sha256');

const genenerateHash = (data) => SHA256(JSON.stringify(data)).toString();

console.log(
  genenerateHash({
    id: 1,
    body: 'With Object Works too',
    time: new Date().getTime().toString().slice(0, -3),
  })
);
