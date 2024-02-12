let transmissionFailureCount=0;
function transmitInCelcius(fahrenheit, networkTransmit = networkTransmitStub) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const returnCode = networkTransmit(celsius);
  if (returnCode !== 200) {
    // Increment failure count for non-200 return codes
    transmissionFailureCount ++;
  }
}
//on having this function we are able to reflect the changes on transmissionFailureCount in both the files, or else the transmissionFailureCount remains 0 on increment
function setTransmissionFailureCount(){
  return transmissionFailureCount;
}
module.exports = { transmitInCelcius, transmissionFailureCount,setTransmissionFailureCount};

