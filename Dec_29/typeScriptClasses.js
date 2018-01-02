var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(n, st, se) {
        this.name = n;
        this.standard = st;
        this.section = se;
    }
    student.prototype.getProperties = function () {
        console.log("Name is: " + this.name + " Standard is: " + this.standard + " Section is: " + this.section);
    };
    student.prototype.setProperty = function (pname, pvalue) {
        if (pname == 'name')
            this.name = pvalue;
        if (pname == 'standard')
            this.standard = pvalue;
        if (pname == 'section')
            this.section = pvalue;
    };
    return student;
}());
var stu1 = new student('nitin', 12, 'A');
var stu2 = new student('Amit', 11, 'B');
stu1.getProperties();
stu2.getProperties();
stu1.setProperty('name', 'Atul');
stu1.getProperties();
var school = /** @class */ (function (_super) {
    __extends(school, _super);
    function school(name, section, standard, schname) {
        return _super.call(this, name, section, standard) || this;
    }
    school.prototype.change = function () {
    };
    return school;
}(student));
var abcschoolStudent = new school('Arun', 'A', 11, 'ABC school');
abcschoolStudent.getProperties();
var zone = /** @class */ (function (_super) {
    __extends(zone, _super);
    function zone(name, section, standard, schname) {
        var _this = _super.call(this, name, section, standard, schname) || this;
        _this.name = 'sdfghjk';
        return _this;
    }
    zone.prototype.hello = function () {
        (function () {
            console.log(this.name);
        })();
        console.log('calling hello', this.name);
    };
    return zone;
}(school));
var z = new zone('name', 'A', 12, 'kjhgf');
z.hello();
//# sourceMappingURL=typeScriptClasses.js.map