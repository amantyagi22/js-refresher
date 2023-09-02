const obj = {
  name: "Aman",
  age: null,
  gender: "male",
  relationship: [],
};

for (let a in obj) {
  if (
    obj[a] === "" ||
    obj[a] === undefined ||
    obj[a] === null ||
    (Array.isArray(obj[a]) && obj[a].length < 0)
  ) {
    delete obj[a];
  }
}

delete obj["relationship"];

console.log(obj);
