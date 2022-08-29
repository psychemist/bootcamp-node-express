const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;


// long method
// module.exports.add = add;
// module.exports.PI = PI;
// exports.square = square; //SHORTCUT


// alternate method
const math = {
	add: add,
	PI: PI,
	square: square,
}

module.exports = math;