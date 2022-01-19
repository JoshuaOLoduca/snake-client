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
    if (msg.includes(',')) {
      msg = msg.split(',')
      let secondHalf = msg[1]
      msg = msg[0];

      console.log(msg)
      setTimeout(() => conn.write('Say: ' + secondHalf), 2000);
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