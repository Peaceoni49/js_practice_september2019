/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");
  let total = 0;
  arr.forEach(n => {
    if (n % 5 === 0 || n % 3 === 0) {
      total += n;
    } 
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("a string is required");
  let isDNA = false;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "A") {
      isDNA = true;
    } else if (str.charAt(i) === "T") {
      isDNA = true;
    } else if (str.charAt(i) === "G") {
      isDNA = true;
    } else if (str.charAt(i) === "C") {
      isDNA = true; 
    } else {
      isDNA = false;
      return isDNA;
    }
  }
  return isDNA;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("a string is required");
  if (isValidDNA(str) === false) throw new Error ("not a valid DNA string");
  let compStrandArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "A") {
      compStrandArr.push("T");
    } else if (str.charAt(i) === "T") {
      compStrandArr.push("A");
    } else if (str.charAt(i) === "G") {
      compStrandArr.push("C");
    } else if (str.charAt(i) === "C") {
      compStrandArr.push("G");
    }
  }
  return compStrandArr.join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error ("a number is required")
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < (Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error ("a number is required")
  if (fill === undefined) throw new Error("fill is required");
  return Array(n).fill(Array(n).fill(fill));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  
  let numOfStaff = 0;

  staff.forEach((person) => {
    for (let i = 0; i < person.rota.length; i++) {
      if (person.rota[i] === day) {
        numOfStaff ++;
      }
    }
  });

  let haveCover = false;
  
  if (numOfStaff >= 3) {
    haveCover = true;
  } 
  return haveCover;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};