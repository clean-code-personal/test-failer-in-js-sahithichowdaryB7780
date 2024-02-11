const { transmitInCelcius, transmissionFailureCount } = require('./transmitter');
const { expect }=require('chai');

    //transmit temperatures
    transmitInCelcius(410.4);
    transmitInCelcius(45.5);
    transmitInCelcius(499);
    transmitInCelcius(500);

    // Log transmission failure count
    console.log(`Transmission failed ${transmissionFailureCount} times.`);

    // Test if transmission failure count is at least 1
    //fails the test,as the code is buggy
    expect(transmissionFailureCount).to.be.at.least(1);
    console.log('Test case passed: At least one transmission failure detected.');
   

    console.log('All is well (maybe!)');


