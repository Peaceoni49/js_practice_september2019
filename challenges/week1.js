function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let returnedWord = " ";
  if (word.charAt(0) === word.charAt(0).toUpperCase()) {
    returnedWord = word;
  } 
  else if (word.charAt(0) !== word.charAt(0).toUpperCase) {
    let firstLet = word.charAt(0).toUpperCase();
    let restOfWord = word.slice(1);
    returnedWord = firstLet + restOfWord;
  }
  return returnedWord;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  //assign the first letter of the first name to a variable
  let fLet = firstName.charAt(0);
  //assign the first letter of the last name to a variable
  let lLet = lastName.charAt(0);
  //assemble the first letter and laste letter into a strng that's returned
  let initials = fLet + "." + lLet;
  return initials;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  //convert the VAT rate to a decimal to multiply the original price by
  let decVatRate = vatRate / 100;
  //get the price of the added cost of VAT
  let vatPrice = originalPrice * decVatRate;
  //calculate the total price by adding the VAT cost to the original price
  let totalCost = originalPrice + vatPrice;
  //check if the total cost has decimal places
  let isInt = Number.isInteger(totalCost);
  //if total cost has decimal places, ensure only 2 decimal places are returned, and that the value is a number
  if (isInt) { 
    return totalCost;
  } else {
    totalCost = parseFloat(totalCost.toFixed(2));
  }
  //finally return the new price
  return totalCost;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  //calculate what the price reduction is
  let costRed = (originalPrice / 100) * reduction;
  //minus the cost reduction from the original price to get the new sale price
  let salePrice = originalPrice - costRed;
  //check if the sale price has decimal places
  let isInt = Number.isInteger(salePrice);
  //if sale price has > 2 decimal places, ensure only 2 decimal places are returned, and that the returned value is a number
  if (isInt) { 
    return salePrice;
  } else if (!isInt) {
    salePrice = parseFloat(salePrice.toFixed(2));
  }
  //finally return the new sale price
  return salePrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  //set a variable for the position of the character to be returned in a substring of str
  let position = 0;
  //set a variable to hold the number of characters to be returned in a substring of str
  let length = 0;
  //determine if str length is odd or even, then update the parameters above accordingly
  if(str.length % 2 === 1) {
    //if the string length is odd, divide the length by 2 to get the starting position for the string
    position = str.length / 2;
    //string length should be 1
    length = 1;
  } else {
    //if the string length is even, divide the length by 2, and minus 1 from the answer to get the starting position for the substring
    position = str.length / 2 - 1;
    //length of the returned substring should be 2
    length = 2;
  }
  //return a substring which starts at the position, and returns one or two characters based on the length of the string being odd or even
  return str.substring(position, position + length)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  //make a placeholder variable for the reversed word
  let revWord = "";
  //loop through the word string in reversed
  for (let i = word.length - 1; i >= 0; i--) {
    //add each character to the reversed word placeholder variable
      revWord += word[i];
  }
  //return the new reversed word
  return revWord;
}

function reverseAllWords(words) {
  let newArr = [];
  //loop through the array in reverse
  for (let i = 0; i < words.length; i++) {
    //take each word of the array
    let word = words[i];
    //Use the split() method to return a new array containing each charater of the word 
    let splitWord = word.split("");
    //Use the reverse() method to reverse the newly created array
    let revWord = splitWord.reverse(); 
    //Use the join() method to join all elements of the array into a string
    let joinRevWord = revWord.join("");
    //push the newly reversed word ito the newArray
    newArr.push(joinRevWord);
  }
  return newArr;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  //create a variable to increment with the numer of linux users
  let numLinUsers = 0;
  //loop through the array of objects, and count the number of linux users for each object
  users.forEach(function (user) {
    //if the user is a linux user...
    if (user.type === "Linux") {
      //...increment the linux-users variable by 1
      numLinUsers ++;
    } 
  });
  //return the number of linux users
  return numLinUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  //set a total variable to hold the total sum of all the items in the array
  let total = 0;
  //set a count variable to count the number of items in the array
  let count = scores.length;
  //loop through the array
  for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    //for each item, add the value to the total variable
    total += score;
  }
  //set a mean score variable which will hold the value of total divided by count
  let meanScore = total / count;
  //determine whether the mean score is a number or a decimal
  let isInt = Number.isInteger(meanScore);
  //if mean score is a whole number, return the whole number
  if (isInt) { 
    return meanScore;
  //if the mean score is a decimal, return it with two decimal places
  } else if (!isInt) {
    meanScore = parseFloat(meanScore.toFixed(2));
  }
  //finally return the mean score
  return meanScore;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let outcome;
	if(n%15 === 0){
		outcome = "fizzbuzz";
	} else if (n%3 === 0){
		outcome = "fizz";
	} else if (n%5 === 0){
		outcome = "buzz";
	} else {
		outcome = n;
	}
  return outcome;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};