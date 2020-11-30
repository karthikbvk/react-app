'use strict';

var x = 'karthik bvk';

var getfirstName = function getfirstName(x) {
    y = x.split(' ')[0];

    return x;
};
var fullname = 'karthik bvk';
// const firstName = (fullname) => {
//  return fullname.split(' ')[0];
// };

var firstName = function firstName(fullname) {
    return fullname.split(' ')[1];
};

console.log(firstName(fullname));
//removal arguments for this case 
// const add = function(a,b){
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(1,5,12));
//After removing the argument by replaceing the es6 arrow function 
var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(1, 5, 12));

// using map methiod in es6
var multiplier = {

    numbers: ['1', '2', '3'],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        // debugger;
        return this.numbers.map(function (num) {
            return _this.multiplyBy * num;
        });
    }
};
console.log(multiplier.multiply());

var emp = {
    name: 'karthik bobbburi',
    Age: 26,
    cities: ['Vijayawada', 'Bangalore'],
    placeslivedin: function placeslivedin() {
        var _this2 = this;

        // debugger
        this.cities.forEach(function (city) {
            return console.log(_this2.name + ' lives in ' + city);
        });
    }
};
console.log(emp.placeslivedin());

var appRoot = document.getElementById('app');

// ReactDOM.render(template,appRoot);

var data = {
    title: "React dec 1",
    options: []

};

var onFormSubmit = function onFormSubmit(e) {
    // alert('test');
    e.preventDefault();
    // debugger

    var option = e.target.elements.option.value;

    if (option) {
        data.options.push(option);
        e.target.elements.option.value = '';
        valueOutput();
    }
};
var removeAll = function removeAll() {
    data.options = []; //data.options.length = 0;
    valueOutput();
};

var ranNum = function ranNum() {
    var opt = data.options;
    var numOut = math.random(opt.length);
    alert(numOut);
};
var valueOutput = function valueOutput() {
    var count = data.options.length;
    // const list = data.options;
    var optLen = data.options.length;
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            data.title
        ),
        React.createElement(
            'p',
            null,
            optLen > 0 ? 'Options entered' : 'No options entered'
        ),
        React.createElement(
            'p',
            null,
            optLen
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'remove all and '
        ),
        React.createElement(
            'button',
            { onClick: ranNum },
            'Random numbers'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', autoComplete: 'off' }),
            React.createElement(
                'button',
                null,
                'options'
            )
        ),
        React.createElement(
            'ol',
            null,
            data.options.map(function (list) {
                return React.createElement(
                    'li',
                    { key: list },
                    list
                );
            })
        )
    );
    ReactDOM.render(template, appRoot);
};
valueOutput();
