const genArrayWithLength1 = (num, item = null) => {
  return new Array(num).fill(item);
};

const genArrayWithLength2 = (num, item = null) => {
  return Array.from({ length: num }, () => item);
};

console.log(genArrayWithLength1(10, 0));
console.log(genArrayWithLength2(10, 0));
