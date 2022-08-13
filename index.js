function hasTargetSum(array, target) {
  let map = {}
for (const result of array) {
    const num = target - result;
    if (map[num])
      return true
      map[result] = true;
     }
  return false; 
}


/* 
  0(n)??
*/

/* 
  create object. iterate over array. with current num, identify a number-
  - that adds up to target. 
*/

/*
 Create an object that nests an array of numbers. Iterate over that array
 and create a 'result number' that adds to our target. If the keys in this
 object is the result of our current number, we return true and save that number as key.
 Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log('Expecting true');
  console.log('=>', hasTargetSum([1,2,3,4,5], 6));

  console.log('');

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
