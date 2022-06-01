const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


const port = 3000;

let searchInput;

app.listen(port, () => console.log(`Express is now ruunning from http://localhost:${port}`))


app.get('/', (req, res) => res.send('Please open the client index.html'))


app.post('/search', (req, res) => {

    console.log(req.body)
    searchInput = req.body

})

app.get('/search', (req, res) => res.send(searchInput))


app.get('/results', (req, res) => {

    getSearchData(searchInput.search)

   async function getSearchData(word) {


       const options = {
           method: 'GET',
           headers: {
               'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
               'X-RapidAPI-Key': 'f338ce7730msh44dbcfa52ca5151p13f049jsnc14d53a89c3f'
           }
       };

       const searchURL = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${word}&pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=true`;

       const response = await fetch(searchURL, options);
       const data = await response.json();

       res.send(data)
   }


});


