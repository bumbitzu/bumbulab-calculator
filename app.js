const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '../public_html')));
app.use(express.json());

// Setăm EJS ca motor de vizualizare
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/calculator', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Serverul rulează la http://localhost:${port}`);
});