const { transmitInCelcius, transmissionFailureCount } = require('./transmitter');
import('chai').then(chai => {
    const { expect } = chai;

    // Transmit temperatures
    transmitInCelcius(410.4);
    transmitInCelcius(45.5);
    transmitInCelcius(499);
    transmitInCelcius(500);

    // Log transmission failure count
    console.log(`Transmission failed ${transmissionFailureCount} times.`);

    // Test if transmission failure count is at least 1
    try {
        expect(transmissionFailureCount).to.be.at.least(1);
        console.log('Test case passed: At least one transmission failure detected.');
    } catch (error) {
        console.error('Test case failed: No transmission failure detected.');
        process.exit(1); // Exit with a non-zero exit code to indicate failure
    }

    console.log('All is well (maybe!)');
}).catch(error => {
    console.error('An error occurred:', error);
    process.exit(1); // Exit with a non-zero exit code to indicate failure
});

