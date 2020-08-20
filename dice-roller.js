const rollDice = function (roll) { 
  // gives int 1 - 6
  let max = Math.ceil(6);
  let min = Math.floor(1); 
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const returnRolls = function(diceRoll) {
  // add rolls to array
  const result = [];
  for (let i = 0; i < diceRoll; i++) {
    result.push(rollDice(i));
  }
  return `Rolled ${diceRoll} dice: ${result.join(', ')}`;
}
// test
console.log(returnRolls(process.argv[2]));
