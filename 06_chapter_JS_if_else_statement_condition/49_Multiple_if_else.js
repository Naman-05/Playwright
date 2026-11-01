// Problem Statement:
// Score --> 0 to 100
// score > 90 --> A grade
// score > 80 --> B grade
// score > 70 --> C grade
// score > 60 --> D grade
// score > 50 --> E grade
// score < 50 --> F grade
// score < 0 or score > 100 --> Invalid score


let score = 95;
if (score > 90 && score <= 100){
    console.log("A grade - Excellent");
}
else if (score > 80 && score <= 90){
    console.log("B grade - Very Good");
}
else if (score > 70 && score <= 80){
    console.log("C grade - Good");
}
else if (score > 60 && score <= 70){
    console.log("D grade - Average");
}
else if (score > 50 && score <= 60){
    console.log("E grade - Needs Improvement");
}
else if (score < 50 && score >= 0){
    console.log("F grade - Fail");
}
else{
    console.log("Invalid score");
}