let items = JSON.parse(localStorage.getItem("basket"));

let table = document.querySelector(".table-body");
let totalp = 0;
items.forEach(element => {
    let name = element.name;
    let count = element.count;
    let price = element.price * count;
    totalp += price;
    let name_td = document.createElement("td");
    name_td.innerText = name;
    let count_td = document.createElement("td");
    count_td.innerText = count;
    let price_td = document.createElement("td");
    price.className = "prices";
    price_td.innerText = price;
    
    let row = document.createElement("tr");
    row.append(name_td, count_td, price_td);
    table.append(row);
});

let prices = Array.from(document.querySelectorAll(".prices"));
let name_td = document.createElement("td");
let count_td = document.createElement("td");
let price_td = document.createElement("td");
price_td.innerText = `${totalp}$`;
let rowTotal = document.createElement("tr");

rowTotal.append(name_td, count_td, price_td);
table.append(rowTotal)