//8kyu//
//count by x- This code creates a list of numbers where each number is a multiple of x, and the list has a length of n numbers//
function countBy(x, n) {
  let z = [];
for (let i = 1; i <= n; i++) {
  z.push(x * i)
}
  return z;
}

//7kyu//
//highest and lowest- This code takes a string of numbers separated by spaces, converts them into a list of numbers, finds the biggest and smallest numbers in the list, and gives you both of those numbers as a result.//
function highAndLow(numbers) {
  let numArray = numbers.split(" ").map(Number);
  let highest = Math.max(...numArray);
  let lowest = Math.min(...numArray);
  
  return `${highest} ${lowest}`;
}