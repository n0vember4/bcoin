const fs = require("fs");
const {BloomFilter} = require("bfilter");
const Address = require ("./lib/primitives/address");

if (process.argv.length != 4) {
  console.log("Usage: node bloomfilter.js bloomfilter address")
  process.exit()
}

var file = process.argv[2]
var address = process.argv[3]

var filter = new BloomFilter();
fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  filter.decode(data);
});
var a = Address.fromBech32(address)
var included = filter.test(a.getHash())

console.log(included)
