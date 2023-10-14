const express = require('express')
const path = require('path');

const app = express()
const port = 3000

app.use(
    '/static',
    express.static(path.join(__dirname, 'public')),
  );

  app.set('view engine', 'pug')

  const generateTitle = () =>{
    return 'Nodejs'
}

app.get('/', (req, res) => {

const title = generateTitle()

    res.render('index')
})

app.get('/kontakt', (req, res) => {
    res.send('Dane kontaktowe')
})
app.listen(port)