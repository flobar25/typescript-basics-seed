function sumArray(message: string, ...arr: number[]) {
  console.log(message);
  console.log(arguments);
  return arr.reduce((prev, next) => prev + next);
}
console.log(sumArray("test", 1, 2, 3, 4, 5, 6));
