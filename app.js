window.addEventListener('load', () => {
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthYear = document.querySelector('.month-year');
  const prevButton = document.querySelector('.previous');
  const nextButton = document.querySelector('.next');

  function getDaysInMonth(m, y) {
    return new Date(y, m, 0).getDate();
  }

  function createCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const table = document.querySelector('.days-of-month');
    table.innerHTML = '';
    monthYear.innerHTML = `${months[month]} ${year}`;

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          const box = document.createElement('td');
          const boxNumber = document.createTextNode('');
          if (j === 0 || j === 6) {
            box.classList.add('weekend');
          }
          box.appendChild(boxNumber);
          row.appendChild(box);
        } else if (date > getDaysInMonth(month, year)) {
          break;
        } else {
          const box = document.createElement('td');
          const boxNumber = document.createTextNode(date);
          if (j === 0 || j === 6) {
            box.classList.add('weekend');
          }
          box.appendChild(boxNumber);
          row.appendChild(box);
          date += 1;
        }
      }
      table.appendChild(row);
    }
  }

  function next() {
    currentMonth = (currentMonth + 1) % 12;
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    createCalendar(currentMonth, currentYear);
  }

  function previous() {
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    createCalendar(currentMonth, currentYear);
  }

  createCalendar(currentMonth, currentYear);
  prevButton.addEventListener('click', previous);
  nextButton.addEventListener('click', next);
});
