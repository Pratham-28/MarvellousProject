var marks

var student = "pratham"
switch(student){
    case "Pratham":
        marks = 45
        break;
    case "Rohit":
        marks = 57
        break
    case "Nayan":
        marks = 56
        break
    default:
        marks =36
        break
}

if(marks<35){
    console.log("Fail")
}
else if(35<marks<70){
    console.log("Good")
}
else if(70<marks<90){
    console.log("nice")
}
else{
    console.log("Bhagwan Bharose")
}

