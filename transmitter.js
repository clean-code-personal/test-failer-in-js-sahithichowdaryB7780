let transmissionFailureCount = 0;

function transmitInCelcius(fahrenheit, networkTransmit = networkTransmitStub) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const returnCode = networkTransmit(celsius);
  if (returnCode !== 200) {
    // Increment failure count for non-200 return codes
    transmissionFailureCount += 1;
  }
}

// Stub function for network transmission
function networkTransmitStub(celsius) {
  console.log(`Temperature to transmit: ${celsius} Celsius`);
  // Generate a random number between 0 and 1
  const randomNumber = Math.random();
  // Map the random number to either 200 or 500
  // If randomNumber is less than or equal to 0.8, return 200, otherwise return 500
  return randomNumber <= 0.8 ? 200 : 500;
}

module.exports = { transmitInCelcius, transmissionFailureCount };

