

function transmitInCelcius(fahrenheit, networkTransmit = networkTransmitStub) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const returnCode = networkTransmit(celsius);
  if (returnCode !== 200) {
    // Increment failure count for non-200 return codes
    transmissionFailureCount ++;
    console.log('transmissionFailureCount:',transmissionFailureCount);
  }
}

module.exports = { transmitInCelcius, transmissionFailureCount };

