const text = "Sam is going to codingschool"

let surname = text.slice(0, 4)
let myVar = surname.toUpperCase()
let school = text.slice(-6)
let myVar2 = school.toUpperCase()
let isGoing = text.slice(3, 16)
let upper = document.write(myVar + isGoing + myVar2 + "<br>")


let myVar3 = isGoing.toUpperCase()
let upper2 = document.write(surname + myVar3 + school + "<br>")


