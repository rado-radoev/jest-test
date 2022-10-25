const newPage = (item) => {
  return item.toUpperCase();
}


const indexMapper = (item) => {
  const p = newPage(item);
  return p.split(' ')
}


module.exports = {
  newPage,
  indexMapper
}