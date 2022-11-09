// Code your solution in this file!

 function distanceFromHqInBlocks(someValue){
    let result
    if (someValue != 50) {
    result = 50 - someValue; 
}
console.log(Math.abs(result))
return Math.abs(result)

}
distanceFromHqInBlocks(65);

function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(a,b){
    if (b>a){
      return((b-a)*264);
    }
    else
      return((a-b)*264);
  }
  
  
  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }
 
