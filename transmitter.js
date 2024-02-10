let transmissionFailureCount = 0;
//dependency injection ,as the networkTransmit is the dependency that represents the function responsible for transmitting the temperature over the network.
function transmitInCelcius(fahrenheit,networkTransmit=networkTransmitStub) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    const returnCode = networkTransmit(celsius);
    if (returnCode !== 200) {
        // non-ok response indicates failure while transmitting over the network
        // The bug has been fixed, so it increments every time the transmissionFailureCount occurs
        transmissionFailureCount += 1;
    }
}

module.exports = { transmitInCelcius, transmissionFailureCount };

