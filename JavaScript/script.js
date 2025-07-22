console.log("Page successfully loaded");   

var teacherName="Kalob Taulien";

console.log(teacherName)
var sum=0;
        var arr=[10,20,30];
        for(var i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
        console.log(sum);

if(teacherName == "Kalob "){
    let apples=5;
    const pi=3.14;
    console.log("I have ",apples," apples");
    console.log("The PI is ",pi);
}else{
    console.log("Not equal");
}

const age = 18;
if (age>=18){
    console.log("I can vote");
}
else if(age>=21){
    console.log("I can drink alchoholz");
}
else{
    console.log("You cannot do anything");
}

const course="This is JavaScript Coding Course";
console.log(course);

console.log(course.search("Coding"));
console.log(course.slice(8,18));
console.log(course.substr(8,10));
console.log(course.replace("Coding","Programming"));
console.log(course) // if we replace the word "Coding" to "Programming", it will not change bacause we have used a const variable

console.log(course.toUpperCase())
console.log(course.toLowerCase());

let spacy="                lost of space        ";
console.log(spacy);
console.log(spacy.trim());