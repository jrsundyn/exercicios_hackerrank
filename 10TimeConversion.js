function timeConversion(s) {

let hora = s.split("")

if(s.includes("PM") == true) {
    if(hora[0] == 0){
        hora[0] = 1
        hora[1] = Number(hora[1]) + 2
        return hora.join("").replace("PM","")
         
    } else if(hora[1] == 2) {
        return hora.join("").replace("PM","")
    } else {
        hora[0] = Number(hora[1]) + 1
        hora[1] = Number(hora[1]) + 2
        return hora.join("").replace("PM","") 
    }
    
} else {
    if(hora[1] == 2){
        hora[0] = 0
        hora[1] = Number(hora[1]) - 2
        return hora.join("").replace("AM","")
    } else {
        return hora.join("").replace("AM","")
        
    } 
  
    }
} 
console.log(timeConversion("17:05:45"))