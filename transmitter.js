let transmissionFailureCount = 0;

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

