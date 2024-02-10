const { transmitInCelcius, transmissionFailureCount } = require('./transmitter');
import('chai').then(chai => {
    const { expect } = chai;
    transmitInCelcius(410.4);
    transmitInCelcius(45.5);
    transmitInCelcius(499);
    transmitInCelcius(500);
    console.log(`Transmission failed ${transmissionFailureCount} times.`);
    //as transmissionFailureCount increment is buggy it can never be incremented and can never be greater than 1
    //fails the test case
    expect(transmissionFailureCount).to.be.at.least(1);
    console.log('All is well (maybe!)');
});
