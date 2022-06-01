let resultsList = document.querySelector('#search-results')


getSearchInput()


async function getSearchInput() {
    const response = await fetch('http://localhost:3000/search');
    const data = await response.json();

    const searchInput = data.search
    console.log(searchInput)

    getSearchResults()

}


async function getSearchResults() {


    const res = await fetch('http://localhost:3000/results');
    const data = await res.json();

    for (let i = 0; i < 10; i++) {

        let newSearchItem = document.createElement('div');
        let newSearchItemHeader = document.createElement('div');
        let spacer = document.createElement('br');
        let itemUrl = document.createElement('a');
        let itemTitle = document.createElement('a');
        let itemDescription = document.createElement('p');

        itemUrl.textContent = data.value[i].url
        itemUrl.href = data.value[i].url

        itemTitle.innerHTML = `<h2>${data.value[i].title}</h2>`
        itemTitle.href = data.value[i].url

        newSearchItemHeader.appendChild(itemUrl)
        newSearchItemHeader.appendChild(spacer)
        newSearchItemHeader.appendChild(itemTitle)

        itemDescription.textContent = data.value[i].description

        newSearchItem.appendChild(newSearchItemHeader)

        newSearchItem.appendChild(itemDescription)

        resultsList.appendChild(newSearchItem)

    }

}
