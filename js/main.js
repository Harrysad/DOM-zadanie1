let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let ul = document.createElement('ol');

for (let i = 0; i < cities.length; i++) {
    let li = document.createElement('li');
    li.classList.add('city');
    li.textContent = cities [i];
    ul.appendChild(li);
}

document.body.appendChild(ul);