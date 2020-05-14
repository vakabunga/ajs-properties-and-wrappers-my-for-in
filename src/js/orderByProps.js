// const unit = {
//   name: 'мечник',
//   health: 10,
//   level: 2,
//   attack: 80,
//   defence: 40,
// };

// const sortOrder = ['name', 'level', 'sdf'];

export default function orderByProps(obj, order) {
  const result = [];
  const sortByAlphabet = Object.keys(obj).sort();
  if (!order) {
    for (let i = 0; i < sortByAlphabet.length; i += 1) {
      result[sortByAlphabet[i]] = obj[sortByAlphabet[i]];
    }
    return result;
  }
  for (let i = 0; i < order.length; i += 1) {
    if (sortByAlphabet.includes(order[i])) {
      result[order[i]] = obj[order[i]];
      // eslint-disable-next-line no-param-reassign
      delete obj[order[i]];
    }
  }
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    result[Object.keys(obj).sort()[i]] = obj[Object.keys(obj).sort()[i]];
  }
  return result;
}

// console.log(orderByProps(unit, sortOrder));
