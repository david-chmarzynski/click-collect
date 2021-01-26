const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const Product = require('./models/product');

require('./database');

app.use(cors());
// API ROUTES
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/products/:category', async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category: category });
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GRAPHQL ROUTES
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));