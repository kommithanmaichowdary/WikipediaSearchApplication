let searchInput = document.getElementById('searchInput')
let searchResults = document.getElementById('searchResults')
let spinner = document.getElementById("spinner")

function createandAppendLinks(results) {
    let {
        title,
        link,
        description
    } = results
    spinner.classList.add("d-none")
    let conatiner = document.createElement("div")
    searchResults.appendChild(conatiner)
    let anchorEl = document.createElement("a")
    anchorEl.href = link
    anchorEl.target = "_blank"
    anchorEl.textContent = title

    anchorEl.classList.add("result-title")
    conatiner.appendChild(anchorEl)

    let linebr = document.createElement('br')
    conatiner.appendChild(linebr)

    let anchorEl_link = document.createElement("a")
    anchorEl_link.href = link
    anchorEl_link.target = "_blank"
    anchorEl_link.textContent = link
    anchorEl_link.classList.add("result-url")
    conatiner.appendChild(anchorEl_link)

    let line_br_1 = document.createElement("br")
    conatiner.appendChild(line_br_1)


    let para = document.createElement("p")
    para.textContent = description
    para.classList.add("link-description")
    conatiner.appendChild(para)


}

function createAndAppend(search_results) {
    for (let results of search_results)
        createandAppendLinks(results)
}

function wikipedia_search_app(event) {
    if (event.key === "Enter") {
        spinner.classList.remove("d-none")
        let userinput = searchInput.value
        searchResults.textContent = ""
        let url = "https://apis.ccbp.in/wiki-search?search=" + userinput
        let options = {
            method: 'GET'
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData
                console.log(search_results)
                createAndAppend(search_results)
            })
    }

}


searchInput.addEventListener('keydown', wikipedia_search_app)