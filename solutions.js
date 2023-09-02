// 1 - Given a string, reverse each word in the sentence

const str = "Welcome to this Javascript Guide!";

// forEach do not return an array
// map does return array if you return the word properly
const strArr = str.split(" ").map((word) => {
  return word.split("").reverse().join("");
});

// console.log(strArr);

// 2 - How to check if an object is an array or not? (Provide some code.)

const check = (arr) => {
  return Array.isArray(arr) ? "array" : "not an array";
};
// console.log(check([]));
// console.log(check({}));

// 3 - How to empty an array in Javascript without using any function or loops

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.length = 0;
// console.log(arr);

// 5 - Make this work :
// duplicate([1,2,3,4,5]); [1,2,3,4,5,1,2,3,4,5]

const duplicate = (arr) => {
  return arr.concat(arr);
};

// console.log(duplicate([1, 2, 3, 4, 5]));

// 6 - Write a Javascript function that reverse a number

const reverseNum = (num) => {
  return Number(num.toString().split("").reverse().join(""));
};

const reverseNum2 = (num) => {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
};

// 11 - Write a Javascript function to get the number of occurrences of each letter in specified string

const letterFreq = (str) => {
  const ans = {};
  str.split("").forEach((char) => {
    if (!ans.hasOwnProperty(char)) ans[char] = 1;
    else ans[char]++;
  });
  return ans;
};
// const str = "amantyagi";
// console.log(letterFreq(str));

// Working of reduce function
// console.log(arr.reduce((prev, acc) => (acc = acc + prev)));

// 13 - loop an array of objects and remove all objects which don't have gender's value male

const users = [
  { name: "Aman", gender: "male" },
  { name: "Surya", gender: "male" },
  { name: "Neha", gender: "female" },
  { name: "Shivani", gender: "female" },
  { name: "Neelam", gender: "female" },
];

const maleUsers = users.filter((obj) => obj.gender === "male");

console.log(maleUsers);
