const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contacts-routes');
const createPath = require('./helpers/create-path');
require('dotenv').config();

app.set('view engine', 'ejs');

mongoose
  .set('strictQuery', false)
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`listening port ${process.env.PORT}`);
});

app.get('/about', (req, res) => {
  res.render(createPath('about'));
});

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static('css'));

app.use(methodOverride('_method'));

app.use(postRoutes);
app.use(contactRoutes);

app.use((req, res) => {
  res.render(createPath('error'));
});
