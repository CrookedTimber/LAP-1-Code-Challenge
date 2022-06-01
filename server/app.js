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


