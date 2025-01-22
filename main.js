const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.write('500 - internal server Error');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
    // res.write('Hello World');
    // res.end();
  } else if (req.url === '/about') {
    const filePath = path.join(__dirname, 'about.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.write('500 -Internal Server Error');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
    // res.write('This is the about page');
    // res.end();
  } else if (req.url === '/contact') {
    const filePath = path.join(__dirname, 'contact.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.write('500 -Internal Server Error');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/services') {
    const filePath = path.join(__dirname, 'services.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.write('500 -Internal Server Error');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write('404 not found');
    res.end();
  }
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
