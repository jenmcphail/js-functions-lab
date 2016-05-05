// Question 1
function maxOfTwoNumbers(x, y) {
	if (x > y) {
		return x
	} else {
		return y
	}
};

console.log(maxOfTwoNumbers(5, 6));

// Question 2
function maxOfThree(x, y, z) {
	if (x > y && x > z) {
		return x
	} else if (y > x && y > z){
		return y
	} else {
		return z
	}
};

console.log(maxOfThree(1, 2, 3));

// Question 3

function isCharacterAVowel(x) {
	if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
		return true;
	} else {
		return false;
	}
};


console.log(isCharacterAVowel("a"));



// Question 4
function sumArray(array) {
	var num = 0;
	for (var i=0; i < array.length; i++) {
		num = num + array[i];
	}
	
	return num;
};

console.log(sumArray([2, 4, 6]));


// Question 4
function multiplyArray(array) {
	var num = 1;
	for (var i=0; i < array.length; i++) {
		num = num * array[i];
	}
	
	return num;
};

console.log(multiplyArray([1, 2, 3]));


// Question 5
var numberOfArguments = function(){
	return arguments.length
  
}

console.log(numberOfArguments(1, 2, 3, 4, 5));



// Question 6
function reverseString(string){
    return string.split("").reverse().join("");
};

console.log(reverseString("Hello, World!"));


// Question 7
function findLongestWord (array) {
	var longest = 0;
	for (i = 0; i < array.length; i++){
		if(array[i].length > longest){
			longest = array[i].length;
		}
	}
	return longest
}

console.log["hello", "goodbye"]




// Question 8
function filterLongWords(array, num) {
	newArray = []
	for (var i = 0; i < array.length; i++){
		if(array[i].length > num){
			newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(filterLongWords(["hello", "goodbye"],6))
  


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

