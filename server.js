//-- server.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3001

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
   
    filename: function(req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, 'x-' + Date.now() + path.extname(file.originalname));
    }
});
   
var upload = multer({ storage: storage })
   
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
   
app.post('/', upload.array('file'), (req, res) => {
  res.redirect('/');
});
   
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//--eof--//
