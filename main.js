'use strict';

// let jediName = function (firstName, lastName){
//     return lastName.slice(0,3) + firstName.slice(0,2) ;
// }

// console.log(jediName('Tammy','Tian'));

// const beyond = (num) => {

// 	if ( isFinite(num) ) {
// 		if (num === 0) {
// 			console.log('Staying home');
// 		}
// 		if (num > 0) {
// 			console.log('To infinity');
// 		} else {
// 				console.log('To negative infinity');
// 		}
// 	} else {
// 			console.log('Any beyond');
// 	}

// }

// console.log( beyond(3) );

const decode = function (secretWord) {
    if (secretWord[0] === 'a') {
        return secretWord[1];
    } else if (secretWord[0] === 'b') {
        return secretWord[2];
    } else if (secretWord[0] === 'c') {
        return secretWord[3];
    } else if (secretWord[0] === 'd') {
        return secretWord[4];
    } else {
        return " ";
    }
}
console.log(decode('craft'));

console.log(decode('block'));

console.log(decode('argon'));

console.log(decode('meter'));

console.log(decode('bells'));

console.log(decode('brown'));

console.log(decode('croon'));

console.log(decode('droop'));

const daysInMonth = (month, leapYear) => {

	let result = '';

	switch(month) {
		case 'January':
		case 'March':
		case 'May':
		case 'July':
		case 'August':
		case 'October':
		case 'December':
			result = `${month} has 31 days.`;
			break;
		case 'February':
			if (leapYear) {
				result = `${month} has 29 days.`;
			} else {
					result = `${month} has 28 days.`;
			}
		case 'April':
		case 'June':
		case 'September':
		case 'November':
			result = `${month} has 30 days.`;
			break;
		default: 
			result = 'Must provide a valid month';
	}

	return result;
}

daysInMonth('March');