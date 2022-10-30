let history = ["09.10.2022&Груз зарегистрирован&Ижевск", "10.10.2022&Груз в пути&Ижевск-Игра", "10.10.2022&Груз в пути&Игра-Глазов"]; //массив строк, поступающий с сервера

const startBody = document.getElementById("StartBody");
const searchBody = document.getElementById("SearchBody");
const numberLen = 5;

function CheckNumber() {
    let number = document.getElementById("inputNumber").value;
    if (number.length != numberLen) {
        alert("Неверный формат номера заказа");
        return;
    }
    for (let i = 0; i < number.length; i++) {
        if (number[i] < '0' || number[i] > '9') {
            alert("Неверный формат номера заказа");
            return;
        }
    }

    CreateHistoryTable(number);
}

function CreateHistoryTable(number) {
    startBody.hidden = true;
    searchBody.hidden = false;

    document.getElementById("orderNumberShow").innerHTML = "Отслеживание заказа №" + number;
    
    ClearTable();
    let rowsCount = history.length;
    let table = document.getElementById("historyTable");
    for (let i = 0; i < rowsCount; i++) {
        let row = document.createElement("tr");
        row.classList.add("historyTable-row");
        let historyRow = history[i].split('&');
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            cell.classList.add("historyTable-cell");
            cell.innerHTML += historyRow[j];
            row.append(cell);
        }
        table.append(row);
    }
}

function CloseTable() {
    ClearTable();
    searchBody.hidden = true;
    startBody.hidden = false;
}

function ClearTable() {
    document.getElementById("historyTable").innerHTML = "";
}
