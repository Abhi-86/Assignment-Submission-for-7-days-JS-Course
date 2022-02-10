var physicsMarks = 70;
var chemistryMarks = 80;
var mathsMarks = 75;
var englishMarks = 85;
var csMarks = 70;

var totalObtainedMarks = physicsMarks + chemistryMarks + mathsMarks + englishMarks + csMarks

var totalMarksInPercentage = (totalObtainedMarks / 500) * 100

console.log("Total Obtained Marks in % = " + totalMarksInPercentage);

if (totalMarksInPercentage < 40)
{
    console.log(Failed);
}
else if (totalMarksInPercentage <= 50){
    console.log("Grade = F")
}
else if (totalMarksInPercentage <= 60){
    console.log("Grade = E")
}
else if (totalMarksInPercentage <= 70){
    console.log("Grade = D")
}
else if (totalMarksInPercentage <= 80){
    console.log("Grade = C")
}
else if (totalMarksInPercentage <= 90){
    console.log("Grade = B")
}
else if (totalMarksInPercentage <= 100){
    console.log("Grade = A")
}
else {
    console.log("Invalid Percentage")
}