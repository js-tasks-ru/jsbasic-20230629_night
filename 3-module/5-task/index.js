function getMinMax(str) {
  const data = str.split(" ");
  const numbers = data.filter((element) => Number(element));

  return { min: Math.min(...numbers), max: Math.max(...numbers) };
}
