var people = [
    { name: "Shamama", surname: "Guliyeva", age: 19 },
    { name: "Said", surname: "Suleymanov", age: 19 },
    { name: "Zuzu", surname: "Gurbanova", age: 20 },
    { name: "Emirxan", surname: "Memmedov", age: 21 },
    { name: "Asiman", surname: "Qasimzade", age: 35 }
];

const table = document.getElementById("table");

for (let i = 0; i < people.length; i++) {

    var row = document.createElement("tr");

    var namec = document.createElement("td");
    namec.innerText = people[i].name;
    row.appendChild(namec);

    var surnamec = document.createElement("td");
    surnamec.innerText = people[i].surname;
    row.appendChild(surnamec);

    var agec = document.createElement("td");
    agec.innerText = people[i].age;
    row.appendChild(agec);
    
    table.appendChild(row);
}

