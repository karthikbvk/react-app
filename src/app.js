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
    placeslivedin() {
        // debugger
        this.cities.forEach((city) =>  console.log( this.name + ' lives in ' + city ));
          }
};
console.log(emp.placeslivedin());










// ReactDOM.render(template,appRoot);

const data = {
    title : "React",
    options: []

};

const onFormSubmit = (e) => {
    // alert('test');
    e.preventDefault();
    // debugger
    
    const option = e.target.elements.option.value;

    if(option ){
        data.options.push(option);
        e.target.elements.option.value = '';
        valueOutput();
    }
    

}; 
const removeAll = () =>{
       data.options = []; //data.options.length = 0;
       valueOutput();
}
const appRoot = document.getElementById('app');
const ranNum = () =>{
    const opt = data.options;
    const numOut = math.random(opt.length) ;
    alert(numOut);
}
const valueOutput = () => {
    const  count = data.options.length;
    // const list = data.options;
    const optLen = data.options.length; 
    const template = (
    
        <div>
            <h1> {data.title}</h1>
            <p>{optLen > 0 ? 'Options entered':'No options entered' }</p>
            <p>{optLen}</p>
            <button onClick={removeAll}>remove all</button>
            <button onClick={ranNum}>Random number</button>
            <form  onSubmit={onFormSubmit}>
                <input type="text" name="option" autoComplete="off"></input>
                <button>options</button>
            </form>
            <ol>
                { 
                    data.options.map((list) => { 
                        return <li key={list}>{list}</li>
                        
                    } )
            }
            </ol> 

        </div>
    );
    ReactDOM.render(template,appRoot);
};
valueOutput();











