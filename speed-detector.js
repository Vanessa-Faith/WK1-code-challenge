function checkSpeedLimit(speed) {
const SpeedLimit=70;
const KmPerPoint=5;
  if (speed <70) {
    console.log("OK");
    }
  else {
    const points = Math.floor((speed - SpeedLimit) / KmPerPoint);
    if (points > 12) {
      return "License suspended";
    }
  
  return `points:${points}`;
}
  
}
console.log(checkSpeedLimit(120));