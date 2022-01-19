const connect = require('./client');
const conn = connect();
const setupInput = require('./input')

conn.on('data', data => console.log(data))

const stdin = setupInput(conn);



