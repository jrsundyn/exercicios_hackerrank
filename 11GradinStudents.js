function gradingStudents(grades) {

   const novas = grades.map(grade => {
       console.log(typeof grade)
        if(grade >= 38){

            if(grade % 5 < 3) {
            return grade
            } else {           
            let diferenca = 5 - (grade % 5)           
            return grade =grade+ diferenca          
            }
        }
        return grade
    });
    return novas
} 
console.log(gradingStudents([73,67,38,33]))
//75 , 67, 40, 33