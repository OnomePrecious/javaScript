//const grade = [95, 78, 85, 60, 45, 92];
function studentGrade(grade) {
    return grade.map((numbers) =>{
    
    if(numbers >= 90) return "A"; 
    else if(numbers >= 80) return "B";
    else if(numbers >= 70) return "C";
    else if(numbers >= 60) return "D";
    else return "F";
    
    })

     
}
//console.log(studentGrade(grade));

module.exports = studentGrade;  
