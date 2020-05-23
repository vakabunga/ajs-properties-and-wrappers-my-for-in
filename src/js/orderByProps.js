export default function orderByProps(obj, order) {
  const result = [];
  const sortByAlphabet = Object.keys(obj).sort(); // сортируем ключи по алфавиту
  // если фильтрующий массив отсуутствует, просто сортируем свойства по алфавиту
  if (order != null) {
    /* если фильтр сортировки задан, то свойства из него записываем в результирующий массив
  (если свойства фильтра существуют в исходном массиве)
   после - удаляем у отсортированного по алфавиту массива ключей объекта свойства,
   которые есть в фильтре */
    for (let i = 0; i < order.length; i += 1) {
      if (sortByAlphabet.includes(order[i])) {
        result.push({ [order[i]]: obj[order[i]] });
        sortByAlphabet.splice(sortByAlphabet.indexOf(order[i]), 1);
      }
    }
    // оставшиеся свойства в отсортированном массиве добавляем в результирующий массив
    for (let i = 0; i < Object.keys(sortByAlphabet).length; i += 1) {
      result.push({ [sortByAlphabet[i]]: obj[sortByAlphabet[i]] });
    }
  } else {
    for (let i = 0; i < sortByAlphabet.length; i += 1) {
      result.push({ [sortByAlphabet[i]]: obj[sortByAlphabet[i]] });
    }
  }
  return result;
}
