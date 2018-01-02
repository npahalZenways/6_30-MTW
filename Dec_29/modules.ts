export module m1{
	export class one{
		className = 'ondvcdfe';
		constructor(){

		}
	}
}
module m2{
	var two  = new m1.one();
	console.log(two.className)
}

var three = new m1.one();


