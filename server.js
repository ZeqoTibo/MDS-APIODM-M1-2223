require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.yaml');

const PORT = process.env.PORT || 6666 ;
const vehiclesRoutes = require('./routes/vehicles');
const filmsRoutes = require('./routes/films');
const peoplesRoutes = require('./routes/people');
const planetsRoutes = require('./routes/planets');
const speciesRoutes = require('./routes/species');
const starshipsRoutes = require('./routes/starships');
const transportsRoutes = require('./routes/transport');

// database connection
require('./config/database');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// routes
app.use('/api/v1/vehicles', vehiclesRoutes);
app.use('/api/v1/films', filmsRoutes);
app.use('/api/v1/people', peoplesRoutes);
app.use('/api/v1/planets', planetsRoutes);
app.use('/api/v1/species', speciesRoutes);
app.use('/api/v1/starships', starshipsRoutes);
app.use('/api/v1/transport', transportsRoutes);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// server running status
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`The app listening at http://localhost:${PORT}`)
});
