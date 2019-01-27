const express = require('express');
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Utilizando Express hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Utilizando helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});


app.get('/', (req, resp) => {

    resp.render('home', {
        name: 'Thomas'
    });
})


app.get('/about', (req, resp) => {

    resp.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port } `);
});