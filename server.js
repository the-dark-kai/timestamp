var express = require('express');
var app = express();

app.get('/:d', function (req, res) {
    var date;
    if(isNaN(req.params.d)){
        date = new Date(req.params.d);
    }
    else{
        date = new Date(req.params.d*1000) ;
    }
    console.log(date);
    var unixts = Math.floor(date.getTime()/1000);
    var natural = date.toDateString();
    var reply;
    console.log(unixts);
    console.log(natural);
    if(isNaN(unixts)){
        reply={
            "unix" : null,
            "natural" : null
        };
    }
    else{
        reply = {
            "unix" : unixts,
            "natural" : natural
        };
    }
    res.setHeader('content-type','application/json');
  res.send(reply);
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

