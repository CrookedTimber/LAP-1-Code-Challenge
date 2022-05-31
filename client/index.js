let form = document.querySelector('#search-form');



let query




form.addEventListener('submit', event => {
    event.preventDefault()


    const query = JSON.stringify({
        search: event.target.query.value
    })
    fetch('http://localhost:3000/search', {
        method: 'POST',
        body: query,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    document.location.replace('./results.html');  


})

