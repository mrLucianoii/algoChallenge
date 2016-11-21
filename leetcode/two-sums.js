/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   var hash = {},
    result = [];
   
    for(var i=0; i<nums.length; i++){
        if(result.hasOwnProperty(nums[i])){
            return [result[nums[i]], i];
        }
            result[target-nums[i]] = i; // this stores the number needed to hit the target
    }
    return "false dude";
};

var test = [3, 4, 5, 12, 3],
x = 7;

debug(twoSum(test, x));


// Explain in words what you did...