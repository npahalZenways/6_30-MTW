//constants

const pi = 3.14;

//rest parameters
//es5
function abc(a, b, c) {
	console.log(a,b,c);
}
abc(1,2,3,4,5,6,7);

//es6
function bcd(a,b,...c){
	console.log(a,b,c);
}

bcd(1,2,3,4,5,6,7);

//arrow functions
//es5
var aFunction = function(a){
	console.log(a);
}

aFunction(1);

//es6
var bFunction = a => console.log(a);

bFunction(2);

//multi line string
var str = `
sdkvbjsdv 
sdkvbjsdvsjdfcvc
sdkvbjsdvsjdfcvc
sdjhcd
	
`
//string interpolation
console.log(`my str is: ${str}, thanks i'm done`);

//scope

if(true){
	var y = 20;
	let z = 10;
	//here y is defined globally and z is defined locally
}