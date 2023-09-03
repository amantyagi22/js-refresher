// 1 - Given a string, reverse each word in the sentence
// eg: "i love javascript" ==> "i evol tpircsavaj"

const str = "i love javascript";

const strArr = str
  .split(" ")
  .map((word) => {
    return word.split("").reverse().join("");
  })
  .join(" ");

// console.log(strArr);

// 2 - How to check if an object is an array or not?

const checkArr = (arg) => {
  if (Array.isArray(arg)) {
    return "array";
  } else {
    return "not an array";
  }
};

// console.log(checkArr([])); // array
// console.log(checkArr({})); // not an array

// 3 - How to empty an array in Javascript without using any function or loops

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.length = 0;
// console.log(arr);

// 4 - How would you check if a number is an interger or not?

// 14.5 ==> 0.5

// ** Check for an early return statement for non-numbers

const isInterger = (num) => {
  return num % 1 === 0;
};

// console.log(isInterger("123"));
// console.log(isInterger(12.67));

// 5 - Make this work :
// duplicate([1,2,3,4,5]); [1,2,3,4,5,1,2,3,4,5]

const duplicate = (arrNum) => {
  return arrNum.concat(arrNum);
};

// console.log(duplicate([1, 2, 3, 4, 5]));

// 6 - Write a Javascript function that reverse a number

const num = -123456;
function reverseNum(num) {
  let rev = 0;
  while (num) {
    n = num % 10;
    rev = rev * 10 + n;
    num = parseInt(num / 10);
  }
  return rev;
}
// console.log(reverseNum(-12345));

// 9 - Write a Javascript function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case

const convertToTitleCase = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.substr(0, 1).toUpperCase() + word.substr(1);
    })
    .join(" ");
};

console.log(convertToTitleCase("lorem ipsum is a dummy text")); // "Lorem Ipsum Is A Dummy Text"
