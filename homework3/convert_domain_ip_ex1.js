var dns = require('dns');
dns.resolve4('mum.edu', function (err, addresses) {
  if (err) throw new Error(err);
  console.log("Use Callback " + addresses);
});

//Convert to promise. util.promisify() (Node V.8)
const { promisify } = require('util');
const resolve4Async = promisify(dns.resolve4);
//-----OR---------
// const util = require('util');
// const lookupAsync = util.promisify(dns.resolve4);
resolve4Async('mum.edu')
  .then(addresses => console.log("Use Promisify " + addresses))
  .catch(err => console.log(err));

//Using async functions
async function getAddress() {
  try {
    const addresses = await resolve4Async('mum.edu');
    console.log("Use Async Function " + addresses);
  }
  catch (err) {
    console.log("Error: " + err);
  }
}
getAddress();