const { CONTROLS, MESSAGES } = require("./constants");

const handleUserInput = function (key, conn) {
  if (key === '\u0003') {
    process.exit();
  }

  if (CONTROLS[key.toLowerCase()] !== undefined) {
    conn.write('Move: ' + CONTROLS[key]);
  }

  if (MESSAGES[key.toLowerCase()] !== undefined) {
    let msg = MESSAGES[key];
    let delay = 2000;
    if (msg.includes(',')) {
      msg = msg.split(',')
      let restOfMessage = msg.slice(1);
      msg = msg[0] + ',';

      for(const message of restOfMessage) {
        setTimeout(() => conn.write(`Say: ${message}`), delay);
        delay += delay;
      }

    }
    conn.write('Say: ' + msg);
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", data => handleUserInput(data, conn));
  return stdin;
};

module.exports = setupInput;