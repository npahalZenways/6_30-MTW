let phone : number;

let names : string = "Nitin";

let isTrue : boolean = true;

let student : object = {
	name: 'Nitin',
	phone: 876
}

let students : number[] = [1,2,3,4];
let students1 : string[] = ['hello', 'hello1'];
let students2 : object[] = [{

}];
let abc : any[];

abc = [1,'sadfv', true, {}, []]

//tuple
let newType : [string, number];

enum col {Yellow=10, Red=10, Blue=3};

let c:col = col.Yellow;

let d:string = col[10];

console.log(c, d);

var bcd:any = function(param1:number, param2:string):number[]{
	return [param1];
}

bcd(1,'')

bcd = function(){

}
//unions
function padding(pad:number | string){
	if(typeof pad == 'number'){
		return pad+'px';
	} else if(typeof pad == 'string'){
		return pad;
	} else return void;
}

padding(10);