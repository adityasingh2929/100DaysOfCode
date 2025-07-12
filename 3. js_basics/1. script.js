console.log("Hello World!")
console.log("Execution has occurred up untill this point as of now.")

alert("Yoolo?")

var a  = prompt("Enter your age")

if(a>=18){
    console.log("You can vote")
    var isTrue = confirm("Do you want to vote?")
    if(isTrue){
        console.log("That's Good!")
    }
    else{
        console.log("That's Awful!")
    }
}

else{
    console.log("You cannot vote")
}



