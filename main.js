function multiplyBy(array, multiplier) {
  return array.map((element) => element * multiplier);
}

console.log(multiplyBy([1, 2, 3], 2));
console.log(multiplyBy([1, 1, 1, 1, 1], 10));
