const weather = document.getElementsByClassName('weather-box')[0];
const date = document.getElementById('date');
const btn = document.getElementById('btn');
const textBox = document.getElementsByClassName('text-box')[0];
const none = document.getElementsByClassName('reminder')[0];
const contain = document.getElementsByClassName('contain')[0];
const close = document.getElementById('closeme');

const currentDate = new Date();
const formattedDate = currentDate.toLocaleString(); 
date.innerHTML = formattedDate;

const addItems = () => {
  if (textBox.value === '') {
    none.style.display = 'flex';
    close.onclick = () => {
      none.style.display = 'none';
    };
  } else {
    let list = document.createElement('li');
    list.innerHTML = textBox.value;
    contain.appendChild(list);
    let span = document.createElement('span');
    span.innerHTML = ' <i class="fa-solid fa-check"></i>' + '<i class="fa-solid fa-xmark"></i>';
    list.appendChild(span);
   
    saveData(); // Call saveData function to save the updated data
  }
  textBox.value = '';
};

btn.addEventListener('click', addItems);

contain.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-check')) {
    const li = e.target.parentElement.parentElement;
    li.classList.add('check');
    saveData(); // Call saveData function to save the updated data
  } else if (e.target.classList.contains('fa-xmark')) {
    const li = e.target.parentElement.parentElement;
    li.remove();
    saveData(); // Call saveData function to save the updated data
  }
});

const saveData = () => {
  localStorage.setItem('lists', contain.innerHTML); 
};

const showData = () => {
  contain.innerHTML = localStorage.getItem('lists');
};

showData(); 