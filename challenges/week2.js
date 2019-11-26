function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return (sandwich.fillings)
}
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  
   if (person.city == "Manchester")
  {
  return true
  }
  else {
    return false
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return Math.ceil(people/40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  const firstLetter = person.address.postCode[0];
  const secondLetter = person.address.postCode[1];
  const isAplhChar = isNaN(Number(secondLetter));
  return firstLetter === "M" && !isAplhChar;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
