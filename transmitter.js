

function transmitInCelcius(fahrenheit, networkTransmit = networkTransmitStub,transmissionFailureCount) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const returnCode = networkTransmit(celsius);
  console.log("xx");
  if (returnCode !== 200) {
    // Increment failure count for non-200 return codes
    transmissionFailureCount ++;
  }
  return transmissionFailureCount 
}

module.exports = { transmitInCelcius, transmissionFailureCount };

