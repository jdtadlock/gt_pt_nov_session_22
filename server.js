const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const api_routes = require('./routes/api_routes');
const port = process.env.PORT || 5000;



mongoose.connect('mongodb://localhost/gt_pt_22');
mongoose.Promise = Promise;

const app = express();

// Front end files folder when using React
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// Setup API Routes
api_routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));