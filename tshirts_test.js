const { size } = require('./tshirts');

import('chai').then(chai => {
    const { expect } = chai;

    expect(size(37)).to.equal('S');
    expect(size(40)).to.equal('M');
    expect(size(43)).to.equal('L');
    expect(size(38)).to.equal('S');

    console.log('All is well (maybe!)');
});
