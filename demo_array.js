let first_result = [["Car", 2000], ["Truck", 500], ["Bike", 6500]];
// let second_result = first_result.concat(["Scooter", 1500]);
//  console.log(second_result);
//let first_result = [["Car", 2000,"Toyota","Nissan"], ["Truck", 500, "Ford"], ["Bike", 6500,"Honda"]];
first_result[0].push("Toyota", "Nissan");
first_result[1].push("Ford");
first_result[2].push("Honda");
console.log(first_result);