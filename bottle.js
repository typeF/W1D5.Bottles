var money = process.argv[2];

function bottle(money){
var bottles = (money / 2);
var total = bottles;
var caps = bottles;
var empties = bottles;
var capsTotals = 0;
var emptiesTotals = 0;
bottles = 0;

while ( (caps >= 4) || (empties >= 2)){
console.log("hi");

  if (caps >= 4){
  var bottlesFromCaps = Math.floor(caps / 4);
  bottles += bottlesFromCaps;
  total += bottlesFromCaps;
  capsTotals += bottlesFromCaps;
  caps -= (4 * bottlesFromCaps);
  }

  if (empties >= 2){
  var bottlesFromEmpties = Math.floor(empties / 2);
  bottles += bottlesFromEmpties;
  total += bottlesFromEmpties;
  emptiesTotals += bottlesFromEmpties;
  empties -= (2 * bottlesFromEmpties);
  }

caps += bottles;
empties += bottles;
bottles = 0;

}

console.log("TOTAL BOTTLES: " + total);
console.log("REMAINING BOTTLES: " + empties);
console.log("REMAINING CAPS: " + caps);
console.log("TOTAL EARNED: ");
console.log("  BOTTLES: " + emptiesTotals);
console.log("  CAPS:  " + capsTotals);
return

}


bottle(money);