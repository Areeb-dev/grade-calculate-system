let totalMarks=Number(prompt("Enter your total number"));
let total = document.getElementById("total");
total.innerHTML = totalMarks;
if(totalMarks === 0){
  document.getElementById("button").disabled = true;
}
let cal = () => {
  let chemisrty = document.getElementById("chemisrty").value;
  let physics = document.getElementById("physics").value;
  let math = document.getElementById("math").value;
  let urdu = document.getElementById("urdu").value;
  let english = document.getElementById("english").value;

  if(chemisrty === ""){
    chemisrty = 0
  }
  if(physics === ""){
    physics = 0
  }
  if(math === ""){
    math = 0
  }
  if(english === ""){
    english = 0
  }
  if(urdu === ""){
    urdu = 0
  }

  //total and obtain marks
  let addObtain =
    parseFloat(chemisrty) +
    parseFloat(physics) +
    parseFloat(math) +
    parseFloat(urdu) +
    parseFloat(english);
  let obtain = document.getElementById("obtain");
  obtain.innerHTML = `${addObtain}`;
  if(totalMarks < addObtain){
    alert("Obtain Marks Is Greater Than Total Marks")
    return true;
  }
  //percentage
  let percentage = (addObtain / totalMarks) * 100;
  percentage=Math.round(percentage);
  let percent = document.getElementById("percent");
  percent.innerHTML = `${percentage}%`;

//grade
  let grades = "";
  if (percentage <= 100 && percentage >= 80) {
    grades = "A";
  } else if (percentage <= 79 && percentage >= 60) {
    grades = "B";
  } else if (percentage <= 59 && percentage >= 40) {
    grades = "C";
  }
  else if(percentage <= 39){
    grades = "F";
  }
  else {
    grades = "Error";
  }
  
  let grade = document.getElementById("grade");
  grade.innerHTML = grades;

  //remark
  let remarks=""
  if(grades === "A"){
   remarks = "Pass"
  }
  else if(grades === "B"){
    remarks = "Pass"
  }else if(grades === "C"){
    remarks = "Pass"
  }else if(grades === "F"){
    remarks = "Fail"
  }
  else{
    remarks ="Error"
  } 
  let remark=document.getElementById("remark")
  remark.innerHTML=remarks;
};
