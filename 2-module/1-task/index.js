function sumSalary(salaries) {
  let result = 0;
  for (key in salaries) {
    result += salaries[key] !== Infinity && salaries[key] !== -Infinity && !isNaN(salaries[key]) && typeof salaries[key] === 'number' ? salaries[key] : 0;
  }

  return result;
}
