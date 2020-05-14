const unit = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const sortOrder = ['name', 'level', 'sdf'];

export default function orderByProps(obj, order) {
  const result = [];
  let sortByAlphabet = Object.keys(obj).sort();
  if (!order) {
    for (let i = 0; i < sortByAlphabet.length; i++) {
      result[sortByAlphabet[i]] = obj[sortByAlphabet[i]];
    }
    return result;
  } else {
    for (let i = 0; i < order.length; i++) {
      if (sortByAlphabet.includes(order[i])) {
        result[order[i]] = obj[order[i]];
        delete obj[order[i]];
      }
    }
    for (let i = 0; i < Object.keys(obj).length; i++) {
      result[Object.keys(obj).sort()[i]] = obj[Object.keys(obj).sort()[i]];
    }
    return result;
  }
}

console.log(orderByProps(unit, sortOrder));
