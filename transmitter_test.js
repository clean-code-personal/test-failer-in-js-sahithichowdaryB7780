const { transmitInCelcius, transmissionFailureCount } = require('./transmitter');
const { expect } = require('chai');

// Modify transmitInCelcius to use shared state
transmitInCelcius(99.01234567901234);
console.log('transmissionFailureCount:', transmissionFailureCount);

transmitInCelcius(-13.61111111111111);
console.log('transmissionFailureCount:', transmissionFailureCount);

transmitInCelcius(126.35802469135803);
console.log('transmissionFailureCount:', transmissionFailureCount);

transmitInCelcius(126.66666666666667);
console.log('transmissionFailureCount:', transmissionFailureCount);

// Log transmission failure count
console.log(`Transmission failed ${transmissionFailureCount} times.`);

// Test if transmission failure count is at least 1
expect(transmissionFailureCount).to.be.at.least(1);
console.log('Test case passed: At least one transmission failure detected.');

console.log('All is well (maybe!)');
