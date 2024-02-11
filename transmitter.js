let transmissionFailureCount = 0;
let b=0;
function transmitInCelcius(fahrenheit,networkTransmitStub) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    const returnCode = networkTransmitStub(celsius);
    if (returnCode !== 200) {
        // non-ok response indicates failure while transmitting over the network
        // record of failure count
        transmissionFailureCount += 1;
        console.log('transmissionFailureCount in trans:',transmissionFailureCount);
    }
    b=transmissionFailureCount;
}

module.exports = { transmitInCelcius, transmissionFailureCount ,b };

