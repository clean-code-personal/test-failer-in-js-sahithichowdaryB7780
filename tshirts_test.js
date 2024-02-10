const { size } = require('./tshirts');
const { size } = require("../tshirts.js");
    expect(size(37)).to.equal('S');
    expect(size(40)).to.equal('M');
    expect(size(43)).to.equal('L');
    // The expected output is 'S',but actual output is 'L'.The test case fails
    expect(size(38)).to.equal('S');
    console.log("All is well (maybe!)");

  

