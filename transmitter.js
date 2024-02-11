let transmissionFailureCount = 0;

function transmitInCelcius(fahrenheit, networkTransmit = networkTransmitStub) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const returnCode = networkTransmit(celsius);
  if (returnCode !== 200) {
    // Increment failure count for non-200 return codes
    transmissionFailureCount += 1;
  }
}

module.exports = { transmitInCelcius, transmissionFailureCount };

