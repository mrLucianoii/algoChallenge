/*

	Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

	Note: The solution set must not contain duplicate triplets.

	For example, given array S = [-1, 0, 1, 2, -1, -4],

	A solution set is:
	[
	  [-1, 0, 1],
	  [-1, -1, 2]
	]


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var nums = nums.sort(),
    	i = 0;
    	j = i + 1,
    	k = nums.length-1;

    


};

var numS = [-1, 0, 1, 2, -1, -4];

debug(threeSum(numS));

