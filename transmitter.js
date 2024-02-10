let transmissionFailureCount = 0;

function networkTransmitStub(celsius) {
    console.log(`Temperature to transmit: ${celsius} Celsius`);
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Map the random number to either 200 or 500
    // If randomNumber is less than 0.5, return 200, otherwise return 500
    return randomNumber < 0.5 ? 200 : 500;

    // The intention here is to transmit the temperature over a network.
    // However, this is a stub, so we just print the message above
    // and give back a return code.

}

function transmitInCelcius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    const returnCode = networkTransmitStub(celsius);
    if (returnCode !== 200) {
        // non-ok response indicates failure while transmitting over the network
        // record of failure count
        transmissionFailureCount += 0;
    }
}

module.exports = { transmitInCelcius, transmissionFailureCount };

