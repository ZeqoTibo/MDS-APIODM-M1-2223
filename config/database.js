// Import the mongoose module
const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = process.env.MONGO_URL || null;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connecté à la base de données');
    })
    .catch((error) => {
        console.error('Erreur de connexion à la base de données:', error);
    });

// Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


