// Include Nodejs' net module.
const Net = require('net');
const args = process.argv.slice(2) //command line arguments accessing
//args[0] would be 1 for "node client 1"


// The port number and hostname of the server.
const port = 8081;
const host = '10.7.1.100';
bConnected=0;

function myFunc(arg) {
  if(bConnected){
	console.log(`Sending Data`);
    client.write('OM SRI RAM '+args[0]);
    setTimeout(myFunc,1000);
    console.log('HIGH17');
  }
}


// Create a new TCP client.
const client = new Net.Socket();
// Send a connection request to the server.
client.connect(({ port: port, host: host }), function() {
    // If there is no error, the server has accepted the request and created a new 
    // socket dedicated to us.
    console.log('TCP connection established with the server.');

    // The client can now send data to the server by writing to its socket.
    client.write('OM SRI RAM ' + args[0]);
	bConnected=1;
	setTimeout(myFunc,1000);
});

// The client can also receive data from the server by reading from its socket.
client.on('data', function(chunk) {
    console.log('HIGH26');
    console.log(`Data received from the server: ${chunk.toString()}.`);
//    myFunc();
    // Request an end to the connection after the data has been received.
    //client.end();
});

client.on('end', function() {
    console.log('Requested an end to the TCP connection');
});



