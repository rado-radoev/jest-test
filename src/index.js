const indexMapper = require ('../modules/indexMapper.js');
const newPage = require ('../modules/newPage.js');

const item = 'this is a string';
const p = newPage(item);
console.log(p)

const i = indexMapper(item);
console.log(i)