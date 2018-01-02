class student{
	public name;
	private standard;
	protected section;
	constructor(n,st,se){
		this.name = n;
		this.standard = st;
		this.section = se;
	}
	getProperties(){
		console.log(`Name is: ${this.name} Standard is: ${this.standard} Section is: ${this.section}`)
	}
	setProperty(pname:string, pvalue:string | number){
		if(pname == 'name') this.name = pvalue;
		if(pname == 'standard') this.standard = pvalue;
		if(pname == 'section') this.section = pvalue;
	}
}

var stu1 = new student('nitin', 12, 'A');
var stu2 = new student('Amit', 11, 'B');
stu1.getProperties();
stu2.getProperties();
stu1.setProperty('name', 'Atul');
stu1.getProperties();

class school extends student {
	schoolName;
	constructor(name, section, standard, schname) {
		super(name, section, standard);
	}
	change(){

	}
}

var abcschoolStudent = new school('Arun', 'A', 11, 'ABC school');
abcschoolStudent.getProperties();

class zone extends school {
	name = 'sdfghjk';
	constructor(name, section, standard, schname) {
		super(name, section, standard, schname);
	}
	hello(){
		(function(){
			console.log(this.name);
		})();
		console.log('calling hello', this.name);
	}
}

var z = new zone('name', 'A', 12, 'kjhgf');
z.hello();