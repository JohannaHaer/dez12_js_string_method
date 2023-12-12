function check() {
    let message = document.querySelector("#message").value
    let result = document.querySelector("#result")

    console.log(typeof(message))

    switch (message) {
        case message:
            result.textContent = `${message}`
            break;
        default:
            result.textContent = "Bitte gibt zuerst eine Nachricht ein"
    }
}

