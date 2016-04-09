var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, '.')));

app.listen(3000, function () {
  console.log('===============Hello Node!===============');//在命令行输出Hello Node!
});  