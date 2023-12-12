function check() {
let password = document.querySelector("#password").value
let result = document.querySelector("#result")

return password.length >= 8
    ? result.textContent = "Willkommen in deinem Account"
    : result.textContent = "Das Passwort ist nicht lang genug. Du brauchst mindestes 8 Zeichen"
}