
const { transmitInCelcius, transmissionFailureCount } = require('./transmitter');
const { expect } = require('chai');

function networkTransmitStub(celsius) {
    console.log(`Temperature to transmit: ${celsius} Celsius`);
    const randomNumber = Math.random();
    return randomNumber < 0.5 ? 200 : 500;
}

function runTests() {
    // Transmit temperature 1
    transmitInCelcius(410.4, function() {
        // Transmit temperature 2
        transmitInCelcius(45.5, function() {
            // Transmit temperature 3
            transmitInCelcius(499, function() {
                // Transmit temperature 4
                transmitInCelcius(500, function() {
                    // Log transmission failure count
                    console.log(`Transmission failed ${transmissionFailureCount} times.`);

                    // Test if transmission failure count is at least 1
                    expect(transmissionFailureCount).to.be.at.least(1);
                    console.log('Test case passed: At least one transmission failure detected.');
                   
                    console.log('All is well (maybe!)');
                });
            });
        });
    });
}

runTests();


