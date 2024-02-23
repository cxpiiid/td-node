let express = require('express');
let app = express();
let port = 3000;

app.use(express.static('www'));
app.use('/css', express.static(__dirname + 'www/css'));
app.use('/js', express.static(__dirname + 'node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + 'node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + 'node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + 'node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + 'node_modules/bootstrap/dist/css'));





app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log('http://localhost:${port}');
})

app.get('/', (req, res, next) => {
    res.sendFile('/www/index.html');
});