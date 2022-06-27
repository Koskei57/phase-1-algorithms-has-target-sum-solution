function hasTargetSum(array, target) {
    // Write your algorithm here
    const seenNumbers = {};
    for (const number of array) {
        const complement = target - number;
        if (seenNumbers[complement]) return true;
        seenNumbers[number] = true;
    }
    return false;
}
// for (let i = 0; i < array.length; i++) {
//     const targetNum = array[i];
//     const neededValues = target - targetNum;
//     const index2 = targetSum[neededValues];
//     if (index2 != null) {
//         return (index2, i);
//     } else {
//         targetSum(targetNum) = i;
//     }
// }
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 4, 3, 4], 8));

    console.log("");


    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;