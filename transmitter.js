let transmissionFailureCount = 0;

function transmitInCelcius(fahrenheit, networkTransmit = networkTransmitStub.bind(this)) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const returnCode = networkTransmit(celsius);
  if (returnCode !== 200) {
    // Increment failure count for non-200 return codes
    incrementTransmissionFailureCount();
    console.log('transmissionFailureCount in transmitter.js:', transmissionFailureCount);
  }
}

function incrementTransmissionFailureCount() {
  transmissionFailureCount++;
}

function networkTransmitStub(celsius) {
    console.log(`Temperature to transmit: ${celsius} Celsius`);
    // Generate a random number between 0 and 1
    const randomNumber = Math.round(Math.random());
    // Map the random number to either 200 or 500
    // If randomNumber is less than 0.5, return 200, otherwise return 500
    return randomNumber == 0 ? 200 : 500;
}

module.exports = { transmitInCelcius, transmissionFailureCount };

