const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

const data = [
  { id: 1, name: 'laptop', price: 67000 },
  { id: 2, name: 'phone', price: 67000 },
  { id: 3, name: 'hedphone', price: 67000 },
  { id: 4, name: 'iphone', price: 67000 },
];

// insert
app.post('/add', (req, res) => {
  const newuser = req.body;
  newuser.id = data.length + 1;
  data.push(newuser);
  res.json({ message: "User added successfully" });
});

// view all
app.get('/', (req, res) => {
  res.json(data);
});

// search query string 
app.get('/search', (req, res) => {
  const name = req.query.name;
  const result = data.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
  res.json(result);
});

// single view
app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = data.find(x => x.id === id);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

// separate pages
app.get('/product', (req, res) => res.send('Product home page'));
app.get('/about', (req, res) => res.send('About page'));
app.get('/contact', (req, res) => res.send('Contact page'));

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
