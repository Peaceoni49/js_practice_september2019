function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let sqNums = [];
  for (let i = 0; i < nums.length; i++) {
    sqNums.push(nums[i] * nums[i]);
  }
  return sqNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camel = [];
  for (let i = 0; i < words.length; i++) {
    //if the index = 0
    //push into camel variable
    if (words.indexOf(words[i]) === 0) {
      camel.push(words[i]);
    } 
    //if index >= 1
    //take the word and capitalise the first letter
    //push it into the camel array
    if (words.indexOf(words[i]) >= 1) {
      camel.push(words[i][0].toUpperCase() + words[i].substring(1));
    }
  }
  return camel.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjectTotal = 0;
  //loop through the array to look at each object
  //foreach value in the key of subjects, increment the subject total value
  people.forEach(function (person) {
    person.subjects.forEach(function (subject) {
      subjectTotal++;
    })
  })
  return subjectTotal;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let ingredientPresent = false;
  //loop through the items in the menu array
    menu.forEach(function(entry){
  //for every item, access the ingredients property then loop through the ingredients array in the object and compare with the ingredient input
      entry.ingredients.forEach(function(item) {
        if (item === ingredient) {
          ingredientPresent = true;
        }
      })
    })
  return ingredientPresent;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let duplicateNums = [];
  //loop through array 1, then loop through array 2 and for each number in array 1 check if it matches array 2, if it does, push it into the duplicates array
  arr1.forEach(function (item1) {
    arr2.forEach(function (item2) {
      if (item1 === item2) {
        duplicateNums.push(item1);
      }
    })
  })
  
  //filter the duplicate numbers array to remove duplicated numbers
  let uniqueNums = new Set(duplicateNums);
  //make sure an array of numbers is returned (set method does not return an array)
  let uniqueNumsArr = [...uniqueNums];

  //get a new array of the unique numbers array, sorted in ascending order
  function sortNumber(a, b) {
    return a - b;
  }

  let orderedNums = uniqueNumsArr.sort(sortNumber);

  return orderedNums;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};