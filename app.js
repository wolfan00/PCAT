const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fileUpload = require('express-fileupload');
const methodoverride = require('method-override');
const { connection, createPhotos, getPhotos, getPhotosByID,updateToPhoto } = require(
  `./modules/photos`
);
const app = express();
const port = 3000;

//template engine
app.set('view engine', 'ejs');

//middle wares
app.use(fileUpload());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride('_method'));
//routes
app.get;
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '.temp/index.html'));
  const photos = getPhotos((err, Photos) => {
    res.render(`index`, { photos: Photos });
  });
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
app.post(`/photos`, async (req, res) => {

  
const uploadImage = req.files.image
const uploadPath = __dirname + `/public/uploads/${uploadImage.name}`
uploadImage.mv(uploadPath, async () => {
  await createPhotos(req);
  res.redirect(`/`);
});
  
});
app.get('/photos/:id', (req, res) => {
  getPhotosByID(req.params.id, (err, Photos) => {
    if (err) {
      console.log(err);
      return;
    }
    res.render('photos', { Photos });
  });
});
app.put('/photos/:id', (req, res) => {
  updateToPhoto(req,req.params.id, (err, Photos) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect(`/photos/${req.params.id}`);
  });
});
app.get('/photos/edit/:id', async (req, res) => {
  await getPhotosByID(req.params.id, (err, Photos) => {
    if (err) {
      console.log(err);
      return;
    }
    res.render('edit', { Photos });
  });
});
app.listen(port, () => console.log(`Sunucu ${port}! portunda başlatıldı.`));
