const newPage = require('./newPage');

const indexMapper = (item) => {
  const p = newPage(item);
  console.log(p)
  return p.split(' ')
}

module.exports = indexMapper