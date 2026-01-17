const http = require('http'); //Injecting dependency library. We need an http library for communication. This is importing it.

const server = http.createServer((req, res) => {
    // Creating a backend to listen for and process requests.

    res.writeHead(200,{'Content-Type':'text/plain'
    }); //Giving OK (200) response and header that says the content type that is being returned is plain text.

    res.end('Hello, World! This is my first Node.js App!! \n'); // End of response


});

//Assigning server listening port

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server is running at: http://localhost:${PORT}`);
});