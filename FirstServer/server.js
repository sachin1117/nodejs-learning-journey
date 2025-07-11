const http = require('http');


const product = [
  { id: 1, name: 'laptop', price: 67000 },
  { id: 2, name: 'phone', price: 67000 },
  { id: 3, name: 'hedphone', price: 67000 },
  { id: 4, name: 'iphone', price: 67000 },

];

const newproduct = { id: 5, name: 'tab', price: 67000 };
const updatedproduct = [...product, newproduct];
console.log(updatedproduct);


//create server 
const server = http.createServer((req, res) => {

  res.write("all product");
  res.writeHead(200, { 'content - type': 'application/JSON' });
  // res.write(JSON.stringify(product));
  //res.end();


  if (req.url === '/products') {
    res.end((JSON.stringify(product)));
  }
  else if (req.url === '/updatedproduct') {
    res.end((JSON.stringify(product)));
  }
  else {
    res.end((JSON.stringify({ massage: "prodct not found" })));
  }

});



const port = 3000;
server.listen(port, () => {
  console.log('server is running   3000');
});

