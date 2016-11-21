/* 

One Away:  There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character.  Given two strings write a function to chec if they 
are one edit (or zero edits) away.  

Example:
pale, ple -> true
pales, pale -> true
pale, bale -> ture
pale, bake -> false

*/

var OneAway = function(arr1, arr2){
	if (Math.abs(arr1.length - arr2.length) > 1){
		return false;
	}

	var a1 = arr1.length > arr2.length ? arr1 : arr2; //swap arrays
	var a2 = arr1.length < arr2.length ? arr2 : arr1;

	var index1 = 0,
	index2 = 0,
	diff = false;

	while(index1 < a1.length && index2 < a2.length){
		if( a1[index1] !== a2[index2] ){
			if(diff)
				return false; // return out, second differnce--test failed
			else 
				diff = true;

			if( a1[index1] === a2[index2] ){
				index1++;
			}
		}else { //fails first condition lets increase the index of the first array
			index1++;

		}
		index2++; 
	}

	return true;
}

var arrayOne = "pale".split(""),
	arrayTwo = "ple".split("");

debug(OneAway(arrayOne, arrayTwo));