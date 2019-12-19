function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
} 

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) {
      newNames.push(names[i]);
    }
  }
  return newNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  words.forEach(function(word) {
    if (word.includes("to ")) {
      verbs.push(word)
    }
  })
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  users.forEach(function (user) {
    cities.push(user.data.city.displayName);
  })
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqRoots = [];
  nums.forEach(function (num) {
    let isInt = Number.isInteger(Math.sqrt(num));
    if (isInt) { 
      sqRoots.push(Math.sqrt(num));
    } else if (!isInt) {
    sqRoots.push(parseFloat(Math.sqrt(num).toFixed(2)));
    }
  })
  return sqRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let selectedSents = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      selectedSents.push(sentences[i]);
    }
  }
  return selectedSents;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach(function(triangle){
    longestSides.push(Math.max(...triangle));
  })
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
}; 