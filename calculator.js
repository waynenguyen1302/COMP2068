const url = require('url');

function calculate(req, res) {
    //parse query from url
    const query = url.parse(req.url, true).query;
    //parse method, x, y from query
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let operator;
    let result;
  
    switch (method) {
      case 'add':
        result = x + y;
        operator = '+';
        break;
      case 'subtract':
        result = x - y;
        operator = '-';
        break;
      case 'multiply':
        result = x * y;
        operator = '*';
        break;
      case 'divide':
        result = x / y;
        operator = '/';
        break;
      default:
        res.end('Invalid method parameter');
        return;
    }
  
    res.end(`${x} ${operator} ${y} = ${result}`);
  }
  
  module.exports = calculate;