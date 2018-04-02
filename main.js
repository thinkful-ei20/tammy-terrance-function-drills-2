'use strict';

let jediName = function (firstName, lastName){
    return lastName.slice(0,3) + firstName.slice(0,2) ;
}

console.log(jediName('Tammy','Tian'));

const beyond = (num) => {

	if ( isFinite(num) ) {
		if (num === 0) {
			console.log('Staying home');
		}
		if (num > 0) {
			console.log('To infinity');
		} else {
				console.log('To negative infinity');
		}
	} else {
			console.log('Any beyond');
	}

}

console.log( beyond(3) );