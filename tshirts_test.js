const { size } = require('./tshirts');

import('chai').then(chai => {
    const { expect } = chai;

    expect(size(37)).to.equal('S');
    expect(size(40)).to.equal('M');
    expect(size(43)).to.equal('L');
    // The expected output is 'S',but actual output is 'L'.The test case fails
    expect(size(38)).to.equal('S');  

    console.log('All is well (maybe!)');
}).catch(error => {
    console.error('An error occurred:', error);
    process.exit(1); // Exit with a non-zero exit code to indicate failure
});

