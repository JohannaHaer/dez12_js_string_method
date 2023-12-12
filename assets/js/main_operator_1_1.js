// function check() {
//     let age = document.querySelector("#age").value
//     let result = document.querySelector("#result")
    
//     switch (age) {
//         case (age >= 18):
//             result.textContent = "Volljährig"
//         default:
//             result.textContent = "Minderjährig"
//     }
// }

function check() {
let age = document.querySelector("#age").value
let result = document.querySelector("#result")

return age >= 18
    ? result.textContent = "Volljährig"
    : result.textContent = "Minderjährig"
}