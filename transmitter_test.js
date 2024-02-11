const { transmitInCelcius,transmissionFailureCount } = require('./transmitter');
const { expect }=require('chai');
function networkTransmitStub(celsius) {
    console.log(`Temperature to transmit: ${celsius} Celsius`);
    // Generate a random number between 0 and 1
    const randomNumber = Math.round(Math.random());
    // Map the random number to either 200 or 500
    // If randomNumber is less than 0.5, return 200, otherwise return 500
    return randomNumber == 0 ? 200 : 500;
       // The intention here is to transmit the temperature over a network.
    // However, this is a stub, so we just print the message above
    // and give back a return code.

}
// Transmit temperatures
transmitInCelcius(99.01234567901234, networkTransmitStub);
console.log('transmissionFailureCount:',transmissionFailureCount);


transmitInCelcius(-13.61111111111111, networkTransmitStub);
console.log('transmissionFailureCount:', transmissionFailureCount);


transmitInCelcius(126.35802469135803, networkTransmitStub);
console.log('transmissionFailureCount:',transmissionFailureCount);


transmitInCelcius(126.66666666666667, networkTransmitStub);
console.log('transmissionFailureCount:',transmissionFailureCount);

// Log transmission failure count
console.log(`Transmission failed ${transmissionFailureCount} times.`);

// Test if transmission failure count is at least 1
expect(transmissionFailureCount).to.be.at.least(1);
console.log('Test case passed: At least one transmission failure detected.');

console.log('All is well (maybe!)');

