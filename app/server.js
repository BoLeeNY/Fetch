const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const dogRouter = require('./routes/DogRoutes');

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/dogs', dogRouter);

app.listen(PORT, () => console.log('listening on port: ', PORT));
