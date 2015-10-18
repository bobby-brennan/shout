var sentence = process.argv[2];
var viCmd = '';
var parsed = sentence.match(/(move|delete) (.*)/);
var verb = parsed[1];
var direction = '';
if (verb === 'move') {
  parsed = parsed[2].match(/(up|down|left|right|forward|backward) (.*)/);
  direction = parsed[1];
}
parsed = parsed[2].match(/(\d+) (line|word|character)s?/);
var num = parsed[1];
var type = parsed[2];

//console.log('cmd', verb, direction, num ,type);
var didOut = false;

if (verb === 'move') {
  if (type === 'line') {
    var cmd = String(num);
    if (direction === 'up' || direction === 'backward') {
      cmd += 'k'
    } else if (direction === 'down' || direction === 'forward') {
      cmd += 'j'
    }
    didOut = true;
    console.log('normal ' + cmd);
  }
}

if (!didOut) console.log('');

