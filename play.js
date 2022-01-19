const connect = require('./client');
const conn = connect('bug', '192.168.86.43', 50541);
const setupInput = require('./input')

conn.on('data', data => console.log(data))

const stdin = setupInput(conn);



