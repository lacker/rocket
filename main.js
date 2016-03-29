const readline = require('readline');

// TODO: make this work - it doesn't seem to pass emoji right
const rocketEval = (code) => {
  const op = code[0];
  const rest = code.slice(1);
  switch(op) {
    case '💬':
      console.log(rest);
    default:
      throw 'Unrecognized operator: ' + op
  }
}

const i = readline.createInterface(process.stdin, process.stdout, null);

i.question('⏩', (text) => {
  console.log('text:', text);
  console.log(rocketEval(text));
});
