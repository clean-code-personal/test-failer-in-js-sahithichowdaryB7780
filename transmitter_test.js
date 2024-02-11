const { transmitInCelcius, transmissionFailureCount } = require('./transmitter');
const { expect } = require('chai');

function networkTransmitStub(celsius, callback) {
    console.log(`Temperature to transmit: ${celsius} Celsius`);
    const randomNumber = Math.random();
    const returnCode = randomNumber < 0.5 ? 200 : 500;
    callback(returnCode);
}

function runTests() {
    let transmissionsCompleted = 0;

    function transmissionCallback() {
        transmissionsCompleted++;
        if (transmissionsCompleted === 4) { // 4 transmissions in total
            // Log transmission failure count
            console.log(`Transmission failed ${transmissionFailureCount} times.`);
            
            // Test if transmission failure count is at least 1
            expect(transmissionFailureCount).to.be.at.least(1);
            console.log('Test case passed: At least one transmission failure detected.');

            console.log('All is well (maybe!)');
        }
    }

    // Transmit temperatures
    transmitInCelcius(410.4, networkTransmitStub.bind(null, 410.4, transmissionCallback));
    transmitInCelcius(45.5, networkTransmitStub.bind(null, 45.5, transmissionCallback));
    transmitInCelcius(499, networkTransmitStub.bind(null, 499, transmissionCallback));
    transmitInCelcius(500, networkTransmitStub.bind(null, 500, transmissionCallback));
}

runTests();




