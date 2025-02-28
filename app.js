const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;

//template engine
app.set('view engine', 'ejs');

//middle wares
app.use(express.static('public'));
//routes
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '.temp/index.html'));
  res.render(`index`);
});
app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '.temp/index.html'));
  res.render(`about`);
});
app.get('/contact', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '.temp/index.html'));
  res.render(`contact`);
});
app.get('/add', (req, res) => {
    //res.sendFile(path.resolve(__dirname, '.temp/index.html'));
    res.render(`add`);
  });
app.listen(port, () => console.log(`Sunucu ${port}! portunda başlatıldı.`));
