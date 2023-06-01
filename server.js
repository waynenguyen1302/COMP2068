const calculate = require('./calculator');
const connect = require('connect');


const app = connect();

app.use(calculate);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});