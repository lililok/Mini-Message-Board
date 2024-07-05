const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const index = require('./routes/index');

app.use('/', index);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});