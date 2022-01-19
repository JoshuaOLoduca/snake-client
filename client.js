///////////////////////////////
// Template START
///////////////////////////////
const net = require("net");
const { IP, PORT, NAME } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // On connection complete, let use know its connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server')

    // set name
    conn.write('Name: ' + NAME);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  console.log("Connecting ...");
  return conn;
};

///////////////////////////////
// Template END
///////////////////////////////

module.exports = connect;