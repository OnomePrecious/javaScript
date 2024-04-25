// let animal = {
 //     type: "Unknown",
 //      sound: function(){
 //          console.log("The " + this.type + " makes a sound.")
 //     }


 // }

 // let dog = Object.create(animal);
 // dog.type = "Dog";
 // dog.color = "brown"


 // let cat = animal;
  // cat.type = "cat";
// console.log(cat);
 // console.log(animal);

 // let goat = {
 //     color: "black",
 //      leg: "it has four legs"
  // };
 // Object.setPrototypeOf(goat, animal)
 // goat.type = "Goat";
 // goat.sound();
 // console.log(goat);






//  let vehicle = { wheels : 4}; //object assigned to variable named vehicle
// let car = {
//     seats : 5,
//     __proto__ : vehicle // __proto__ property assigned to vehicle will appear here
// };
//     wheels : 6,
// }; // object assigned to variable named car

// print all objects and __proto__ property for each variable
//console.log(`vehicle:`, vehicle, vehicle.proto);
// console.log(`car:`, car, car.proto);
//console.log(`car wheels:`, car.wheels);





// function Person(name, age){
//     this.name = name;
//     this.age = age;

//     this.sayName = function (){
//         console.log(this.name + " is " + this.age + " years");
//     }

// }

// const personOne = new Person("Precious", 12);
// const PersonTwo = new Person("Rachel", 18);
// personOne.sayName();
// console.log(personOne.name);
// console.log(PersonTwo.name);


// Methods used in manipulating JSON.

// const json = '{"result":true, "count": 42}';
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(obj.count);

// console.log(JSON.stringify({ x: 5, y: 6 }));

// console.log(JSON.stringify({result: true, count: 42}))
