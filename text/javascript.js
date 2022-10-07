'use strict';

// three arrays we'll calculate averages
var scoresArray1 = [87, 93, 69, 96, 77, 81];
var scoresArray2 = [56, 82, 71];
var scoresArray3 = [99, 97, 91, 89, 92];

// You'll write a function here called calculateAverage, which will
//  accept one argument - the array, and return the average of the
//  numbers in the array.

// function arrayAveraage (arrayName){functi
// for (let i = 0; i < scoresArray1.lenght; i++) {
// 	console.log(i);
// }

function calculateAverage(passedArray) {
	let sum = 0;
	let i = 0;
	for (; i < passedArray.length; i++) {
		sum = sum + passedArray[i];
	}
	return sum / i;
}
// }

//here we're calling your function on the three arrays and outputting the result

document.getElementById('average1').innerHTML = calculateAverage(scoresArray1);
document.getElementById('average2').innerHTML = calculateAverage(scoresArray2);
document.getElementById('average3').innerHTML = calculateAverage(scoresArray3);
