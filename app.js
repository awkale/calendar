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
  const monthYearTitle = document.querySelector('.month-year');
  const calendarGrid = document.querySelector('.days-of-month');
  const prevButton = document.querySelector('.previous');
  const nextButton = document.querySelector('.next');

  function getDaysInMonth(m, y) {
    return new Date(y, m + 1, 0).getDate();
  }

  function createCalendar(month, year) {
    const firstDayOfWeek = new Date(year, month).getDay();
    const daysInCurrentMonth = getDaysInMonth(month, year);
    const totalGridCount = daysInCurrentMonth + firstDayOfWeek;
    calendarGrid.innerHTML = '';
    monthYearTitle.innerHTML = `${months[month]} ${year}`;

    let dateOfMonth = 1;

    for (let i = 0; i < totalGridCount; i++) {
      const div = document.createElement('div');
      const divBlank = document.createTextNode('');

      if (i % 7 === 6 || i % 7 === 0) {
        div.classList.add('weekend');
      }

      if (i < firstDayOfWeek) {
        div.appendChild(divBlank);
      } else {
        const divNumber = document.createTextNode(dateOfMonth);
        div.appendChild(divNumber);
        dateOfMonth += 1;
      }
      calendarGrid.appendChild(div);
    }
  }

  function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    createCalendar(currentMonth, currentYear);
  }

  function previous() {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    createCalendar(currentMonth, currentYear);
  }

  createCalendar(currentMonth, currentYear);
  prevButton.addEventListener('click', previous);
  nextButton.addEventListener('click', next);
});
