///////////////////////////////
// Template START
///////////////////////////////
const net = require("net");

// establishes a connection with the game server
const connect = function (name, host, port) {
  const conn = net.createConnection({
    host: host, // IP address here,
    port: port// PORT number here,
  });

  // On connection complete, let use know its connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server')

    // set name
    conn.write('Name: ' + name);
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