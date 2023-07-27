/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.render(rows);
    this.deleteRow();
  }

  render(rows) {
    const table = document.createElement("table");
    const list = rows.reduce(function(resultList, currentRow) {
      return resultList + `
          <tr>
          <td>${currentRow.name}</td>
          <td>${currentRow.age}</td>
          <td>${currentRow.salary}</td>
          <td>${currentRow.city}</td>
          <td><button class="remove-btn">X</button></td>
          </tr>`;
    }, '');

    table.innerHTML = `
      <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>${list}</tbody>
      </table>
    `;

    return table;
  }
  deleteRow() {
    for (const button of this.elem.querySelectorAll("button")) {
      button.addEventListener('click', (event) =>
        event.target.closest("tr").remove());
    }
  }
}
