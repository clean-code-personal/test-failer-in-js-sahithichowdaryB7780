const { transmitInCelcius, transmissionFailureCount } = require('./transmitter');
const { expect }=require('chai');
function networkTransmitStub(celsius) {
    console.log(`Temperature to transmit: ${celsius} Celsius`);
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Map the random number to either 200 or 500
    // If randomNumber is less than 0.5, return 200, otherwise return 500
    return randomNumber < 0.1 ? 200 : 500;
       // The intention here is to transmit the temperature over a network.
    // However, this is a stub, so we just print the message above
    // and give back a return code.

}

    //transmit temperatures
    transmitInCelcius(410.4,networkTransmitStub);
    transmitInCelcius(45.5,networkTransmitStub);
    transmitInCelcius(499,networkTransmitStub);
    transmitInCelcius(500,networkTransmitStub);

    // Log transmission failure count
    console.log(`Transmission failed ${transmissionFailureCount} times.`);

    // Test if transmission failure count is at least 1
    //fails the test,as the code is buggy
        expect(transmissionFailureCount).to.be.at.least(1);
        console.log('Test case passed: At least one transmission failure detected.');

    console.log('All is well (maybe!)');





