function checkSpeedLimit(speed) {
  //Function to check if a driver is within the speed limit
  // and calculate demerit points if they exceed the limit
const SpeedLimit=70; //speed limit of 70km/h
const KmPerPoint=5;  // 5km/h over the limit earns 1 demerit point
  if (speed <70) {   // If speed is less than the speed 70km/h
    console.log("OK"); // Driver is within the speed limit
    }
  else {
    const points = Math.floor((speed - SpeedLimit) / KmPerPoint); // Calculate demerit points
    if (points > 12) {  // If points exceed 12, suspend license
      return "License suspended";
    }

  return `points:${points}`; // Return the demerit points
}
  
}
console.log(checkSpeedLimit(120));