function gasStation(obj, currentFuel, fuelConsumption){
   let maxKm = currentFuel / fuelConsumption *100;

   let totalCost;

   let cheapestPrice =  10000000000000000000;
   let cheapestStation;
   for (let station of Object.keys(obj)){
    if (maxKm < obj[station]["distance"]){
      continue;
    }else{
      totalCost = getCostsOfStation(station);
      
      if (totalCost < cheapestPrice){
        cheapestPrice = totalCost;
        cheapestStation = station;
      }
    }
   }
   return cheapestStation
}

function getCostsOfStation(station){
  distance = obj[station]["distance"];
  consumptionToStation = distance * fuelConsumption / 100 ; 
  remainingFuel = currentFuel - consumptionToStation;
  fuelNeeded = 60 - remainingFuel;
  costToHome = obj[station]["distance"] * fuelConsumption / 100 * obj[station]["price"]
  totalCost = fuelNeeded * obj[station]["price"] + costToHome;
  return totalCost;
}

var obj = {
  "gas1": {"price": 1.5, "distance": 50},
  "gas2": {"price": 2.0, "distance": 75}
};
var currentFuel = 35;
var fuelConsumption = 7.5;

console.log(gasStation(obj, currentFuel, fuelConsumption))