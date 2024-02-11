const { transmitInCelcius, transmissionFailureCount } = require('./transmitter');
const { expect } = require('chai');

function networkTransmitStub(celsius) {
    console.log(`Temperature to transmit: ${celsius} Celsius`);
    const randomNumber = Math.random();
    return Promise.resolve(randomNumber < 0.5 ? 200 : 500);
}

async function runTests() {
    // Transmit temperatures
    await transmitInCelcius(410.4, networkTransmitStub);
    await transmitInCelcius(45.5, networkTransmitStub);
    await transmitInCelcius(499, networkTransmitStub);
    await transmitInCelcius(500, networkTransmitStub);

    // Log transmission failure count
    console.log(`Transmission failed ${transmissionFailureCount} times.`);

    // Test if transmission failure count is at least 1
    expect(transmissionFailureCount).to.be.at.least(1);
    console.log('Test case passed: At least one transmission failure detected.');
   
    console.log('All is well (maybe!)');
}

runTests();



