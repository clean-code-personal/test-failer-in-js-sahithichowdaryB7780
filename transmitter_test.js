const { transmitInCelcius, transmissionFailureCount,b } = require('./transmitter');
const { expect }=require('chai');
function networkTransmitStub(celsius) {
    console.log(`Temperature to transmit: ${celsius} Celsius`);
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Map the random number to either 200 or 500
    // If randomNumber is less than 0.5, return 200, otherwise return 500
    return randomNumber < 0.5 ? 200 : 500;
  }

    //transmit temperatures
function transmissionFailureCountTest(networkTransmitStub){
    transmitInCelcius(410.4,networkTransmitStub);
    transmitInCelcius(45.5,networkTransmitStub);
    transmitInCelcius(499,networkTransmitStub);
}
transmissionFailureCountTest();


// Log transmission failure count
console.log(`Transmission failed ${b} times.`);

// Test if transmission failure count is at least 1
expect(b).to.be.at.least(1);
console.log('Test case passed: At least one transmission failure detected.');

console.log('All is well (maybe!)');
