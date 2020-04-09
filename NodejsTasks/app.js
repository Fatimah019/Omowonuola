var http=require('http');
var fs=require('fs');
var port=8080;
var url=require('url');


//create a server object
http.createServer(function(req, res){

    //http header (response to be displayed as html)
    res.writeHead(200, {'Content-Type': "text/html"});

    //read index.html file to display the form
    fs.readFile('form.html', (err, data)=>{
        res.write(data);
        if (req.method==="POST"){
        var message='' ;
    
        req.on('data', (data)=>{
            message+=data;
        });
        req.on('end', ()=>{
        fs.appendFile('./message.txt', message, (err)=>{
            if(err) throw err;
        });
       
    });
}

    //end the respone
    res.end();
});

//server oject listens on port 8080
}).listen(port);