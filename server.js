const express = require('express');
const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alan'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

// app.get('/', function(req, res) {
//     //res.send('<h1>Hola Alan</h1>');
//     let salida = {
//         nombre: 'Alan Vargas',
//         edad: 19,
//         url: req.url
//     };
//     res.send(salida);
// });

// app.get('/hola', (req, res) => {
//     res.send('Estas en /hola');
// });

app.listen(3000)
console.log('Escuchando por el puerto 3000', port);