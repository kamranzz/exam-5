const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


// Connect to MongoDB
mongoose.connect('mongodb+srv://kamran:Admin123@cluster1.jykvcvv.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the product schema
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageURL: String,
});

// Create a mongoose model based on the schema
const Product = mongoose.model('Product', productSchema);

// Create an Express app
const app = express();
app.use(express.json());
app.use(cors())


// GET all products or search products by title
app.get('/products', async (req, res) => {
    try {
      const { search } = req.query;
      let query = {};
  
      if (search) {
        query = { title: { $regex: search, $options: 'i' } };
      }
  
      const products = await Product.find(query);
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  



// GET a specific product by ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new product
app.post('/products', async (req, res) => {
  try {
    const { title, description,imageURL } = req.body;
    const product = new Product({ title, description,imageURL });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE a product
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 
