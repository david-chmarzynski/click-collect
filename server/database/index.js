const mongoose = require('mongoose');
const { USERNAME, PASSWORD, DATABASE } = require('../secret');

mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-gfvr6.gcp.mongodb.net/${DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
	.then(() => console.log('Connexion à la base de données établie'))
	.catch(err => console.log(err));

module.exports = mongoose;