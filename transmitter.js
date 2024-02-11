let transmissionFailureCount = 0;

function transmitInCelcius(fahrenheit, networkTransmit = networkTransmitStub) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const returnCode = networkTransmit(celsius);
  console.log("xx");
  if (returnCode !== 200) {
    // Increment failure count for non-200 return codes
    console.log("hi");
    transmissionFailureCount += 1;
  }
}

module.exports = { transmitInCelcius, transmissionFailureCount };

