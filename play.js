const connect = require('./client');
const conn = connect();
const setupInput = require('./input')

conn.on('data', data => console.log(data))
conn.on('data', data => {
  if(data.includes('you ded'))process.exit(1);
});

const stdin = setupInput(conn);



