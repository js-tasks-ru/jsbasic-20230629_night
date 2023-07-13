function camelize(str) {
  const arr = str.split('-');
  const result = arr.map((element) => {
    if (element !== arr[0]) {
      return element[0].toUpperCase() + element.slice(1);
    } else {
      return element;
    }
  });

  return result.join("");
}

console.log(camelize('background-color'));
