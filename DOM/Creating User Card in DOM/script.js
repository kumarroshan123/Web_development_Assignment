const users = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" },
];

const container = document.getElementById('card-container');

users.forEach(user =>{
    const card = document.createElement('div');
    card.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = user.name;

    const p1 = document.createElement('p');
    p1.textContent = `Username: ${user.username}`;

    const p2 = document.createElement('p');
    p2.textContent = `Email: ${user.email}`;

    card.append(h2);
    card.append(p1);
    card.append(p2);
    container.append(card);
});

const b=document.getElementById('btn');

b.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    if(!name ||!username ||!email) {
        alert('Please fill all fields');
        return;
    }
    
    const newUser = {id: users.length+1,name, username, email};
    users.push(newUser);
    const card = document.createElement('div');
    card.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = newUser.name;

    const p1 = document.createElement('p');
    p1.textContent = `Username: ${newUser.username}`;

    const p2 = document.createElement('p');
    p2.textContent = `Email: ${newUser.email}`;

    card.append(h2);
    card.append(p1);
    card.append(p2);
    container.append(card);
    
    b.reset();
});