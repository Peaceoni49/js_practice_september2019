const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let returnedNum = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.length - 1) {
      returnedNum = null;
    } else if (nums.indexOf(nums[i]) !== nums.length - 1) {
      if (nums[i] === n) {
        return returnedNum = nums[i + 1];
      }
    }
  }
  return returnedNum;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  let count = { 
    1 : 0,
    0 : 0
  }

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "1") {
      count[1] += 1;
    } else {
      count[0] += 1;
    }
  }

  return count;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let backwardsNum = parseInt(n.toString().split("").reverse().join(""));
  return backwardsNum;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for (let i = 0; i < arrs.length; i++) {
    arrs[i].forEach((i) => {
      sum += i;
    });
  }
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  } else {
    return arr;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  let foundNeedle = false;

  for (let key in haystack) {
    if (typeof haystack[key] === "string") {
        if (haystack[key].toLowerCase().includes(searchTerm.toLowerCase())){
          foundNeedle = true;
        }
    }
  }
  return foundNeedle;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let wordsArr = str.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '').toLowerCase().split(" ");

  const wordFreqs = {};

  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    if (wordFreqs[word] === undefined) {
      wordFreqs[word] = 1;
    } else {
      wordFreqs[word] += 1;
    }
  }
  return wordFreqs;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};