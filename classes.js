// class Dayo{
//     constructor(name, age, size){
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
//      setName(newName){
//         this.name = newName
//     }
//     getName(){
//         return this.name;
//     }
//     setAge(anyAge){
//         this.age = anyAge;
//     }
//     getAge(){
//         return this.age;
//     }
//     setSize(shoeSize){
//         this.size = shoeSize;
//     }
//     getSize(){
//         return this.size;
//     }
// }




function Human(_name, _age) {
    // properties assignment passed as arguments
    this.name = _name;
    this.age = _age;
    
}

function Employee(_name, _age, _designation) {
    //???????????????????
    this._designation = _designation;

    //method
    this.setAge = newage => {
        console.log(`setting age from ${this.age} to $ {newage}`)// adding call method would make properties of Human constructor function available to
        this.age = newage;
    }
    
}