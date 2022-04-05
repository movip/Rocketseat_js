// let systemNote = function(note){
//   if (note >= 90) {
//     console.log("A") 
//   }else if (note >= 80 && note<= 89){
//     console.log("B")
//   }else if (note >= 70 && note<= 79){
//     console.log("C")
//   } else if (note >= 60 && note<= 69){
//     console.log("D")
//   }else{
//     console.log("F")
//   }
// }
// systemNote(55)

function getScore(score){
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score<= 89;
  let scoreC = score >= 70 && score<= 79;
  let scoreD = score >= 60 && score<= 69;
  let scoreF = score < 60 && score >= 0;
  
  let scoreFinal;

  if (scoreA){
    scoreFinal = "A"
  }else if (scoreB){
    scoreFinal = "B"
  }else if (scoreC){
    scoreFinal = "C"
  }else if (scoreD){
    scoreFinal = "D"
  }else if (scoreF){
    scoreFinal = "F"
  }else{
    scoreFinal = "Nota inválida"
  }
  return scoreFinal;
}

console.log(getScore(90))