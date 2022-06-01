let resultsList = document.querySelector('#search-results')


// getSearchInput()




// async function getSearchInput() {
// 	const response = await fetch('http://localhost:3000/search');
// 	const data = await response.json(); 

//     const searchInput = data.search
//     console.log(searchInput)

//     getSearchResults(searchInput)

// }



// async function getSearchResults(text) {




//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
//             'X-RapidAPI-Key': 'f338ce7730msh44dbcfa52ca5151p13f049jsnc14d53a89c3f'
//         }
//     };

//     const searchURL = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${text}&pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=true`;

//     const response = await fetch(searchURL, options);
//     const data = await response.json();


//     for (let i = 0; i < 10; i++) {

//         let newSearchItem = document.createElement('div');
//         let newSearchItemHeader = document.createElement('div');
//         let spacer = document.createElement('br');
//         let itemUrl = document.createElement('a');
//         let itemTitle = document.createElement('a');
//         let itemDescription = document.createElement('p');

//         itemUrl.textContent = data.value[i].url
//         itemUrl.href = data.value[i].url

//         itemTitle.innerHTML = `<h2>${data.value[i].title}</h2>`
//         itemTitle.href = data.value[i].url

//         newSearchItemHeader.appendChild(itemUrl)
//         newSearchItemHeader.appendChild(spacer)
//         newSearchItemHeader.appendChild(itemTitle)

//         itemDescription.textContent = data.value[i].description

//         newSearchItem.appendChild(newSearchItemHeader)

//         newSearchItem.appendChild(itemDescription)

//         resultsList.appendChild(newSearchItem)

//     }

// }
