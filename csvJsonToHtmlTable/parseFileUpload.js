    const jsonInput = document.getElementById('logFile');
    jsonInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const jsonregex = /(.json)$/;
            if(jsonregex.test(jsonInput.value.toLowerCase())){
                try {
                    const jsonData = JSON.parse(e.target.result);
                    displayJsonAsTable(jsonData);
                }
                catch (error) {
                    isValidJSON();
                    console.log("Error: ", error);
                }
            }
        };
        reader.readAsText(file);
    });

    function displayJsonAsTable(data) {
        const headerRow = document.getElementById("tableHeader");
        const keys = Object.keys(data[0]);
            keys.forEach((key) => {
                const th = document.createElement("th");
                th.textContent = key;
                headerRow.appendChild(th);
            });

            data.forEach((item) => {
                const tr = document.createElement("tr");

                keys.forEach((key) => {
                    const td = document.createElement("td");
                    td.textContent = item[key];
                    tr.appendChild(td);
                });

                document.querySelector('#logTable tbody').appendChild(tr);
            });
        }
    const csvInput = document.getElementById("logFile");
    csvInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            displayCSVAsTable();
        };
        reader.readAsText(file);
    });

    function displayCSVAsTable() {
        var fileUpload = document.getElementById("logFile");
        const regex = /(.csv)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var table = document.createElement("table");
                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        if (cells.length > 1) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }
                    var logFile = document.getElementById("logTable");
                    logFile.innerHTML = "";
                    logFile.appendChild(table);
                }
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        }
    }

    function isValidJSON() {
        var error = document.getElementById("error")
        error.textContent = "Invalid JSON."
        error.style.color = "red"
    }