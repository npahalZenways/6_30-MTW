var phone;
var names = "Nitin";
var isTrue = true;
var student = {
    name: 'Nitin',
    phone: 876
};
var students = [1, 2, 3, 4];
var students1 = ['hello', 'hello1'];
var students2 = [{}];
var abc;
abc = [1, 'sadfv', true, {}, []];
//tuple
var newType;
var col;
(function (col) {
    col[col["Yellow"] = 10] = "Yellow";
    col[col["Red"] = 10] = "Red";
    col[col["Blue"] = 3] = "Blue";
})(col || (col = {}));
;
var c = col.Yellow;
var d = col[10];
console.log(c, d);
var bcd = function (param1, param2) {
    return [param1];
};
bcd(1, '');
bcd = function () {
};
//unions
function padding(pad) {
    if (typeof pad == 'number') {
        return pad + 'px';
    }
    else if (typeof pad == 'string') {
        return pad;
    }
    else
        return void ;
}
padding(10);
//# sourceMappingURL=firstType.js.map