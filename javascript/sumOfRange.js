var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var sum = 0;

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++){
	sum += testArray[arrayPosition];
}

console.log("The sum of " + testArray + " is: " + sum);

function findMax(numList){
	var max = 0;
	for (var arrayPosition = 0; arrayPosition < numList.length; arrayPosition++){
		if (numList[arrayPosition] > max){
			max = numList[arrayPosition];
		}
	}

	return max;
}