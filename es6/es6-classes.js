class Details{
   constructor(name='anonymous',age = 0){
       this.name = name ;
       this.age = age;
   }
getDscription(){
    return ` hi this is ${this.name + " "+this.age} years old .`;
}
}



class Traveller extends Details{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation; 
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getDscription(){
        let description = super.getDscription();
        if (this.hasLocation()){
             description += `i am from ${this.homeLocation}`;

        } 

        return description;
    }



}




const out = new Traveller('karthik',28,'Bangalore');
console.log(out.getDscription());
const out1 = new Traveller();
console.log(out1.getDscription());
console.log(out);
console.log(out1);
