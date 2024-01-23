fetch("logs.json")
.then(response => response.json())
.then(data => {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    data.forEach(value =>{
        const row = document.createElement("tr");
        headers.forEach(cell =>{
            const td = document.createElement("td");
            td.textContent = value[cell];
            row.appendChild(td);
        });
        table.appendChild(row);
    });
    document.body.appendChild(table);
    })
    .catch(error => console.error("Error: ", error));