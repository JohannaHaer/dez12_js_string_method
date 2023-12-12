function searchReplace() {
    let article = document.querySelector("#article")
    let search = document.querySelector("#search-input").value
    article.innerHTML = article.innerText.replaceAll(search, `<span class="highlight">${search}</span>`)
}