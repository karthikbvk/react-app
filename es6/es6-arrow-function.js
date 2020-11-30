
const x = 'karthik bvk';

const getfirstName = function(x){
    y = x.split(' ')[0];
    
    return y;
}
const fullname ='karthik bvk';
// const firstName = (fullname) => {
//  return fullname.split(' ')[0];
// };

const firstName = (fullname) => fullname.split(' ')[1];

console.log(firstName(fullname));
//removal arguments for this case 
// const add = function(a,b){
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(1,5,12));
//After removing the argument by replaceing the es6 arrow function 
const add = (a,b) => {
    // console.log(arguments);
        return a + b;
    }
    console.log(add(1,5,12));



// using map methiod in es6
const multiplier = {
 
        numbers :['1','2','3'],
        multiplyBy: 2,
        multiply(){
            debugger
            return this.numbers.map((num) => this.multiplyBy * num );
        }

}; 
console.log(multiplier.multiply());



const emp = {
    name :'karthik bvk',
    Age: 26, 
    cities:['Vijayawada','Bangalore'],
    placeslivedin(){
        this.cities.forEach((city) => {
            return this.name + ' lives in ' + city;
        });
         return;
    }
}
console.log(emp.placeslivedin());