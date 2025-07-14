(function() {
  const dataMatrix = [
    ["Name", "Age", "Join Date"],
    ["Alice", 30, "2023-01-15"],
    ["Bob", 22, "2024-05-22"],
    ["Charlie", 25, "2023-09-10"],
    ["David", 35, "2022-12-01"]
  ];

  const originalData = dataMatrix.slice(1);
  const container = document.getElementById("table-container");
  const table = document.createElement("table");
  table.className = "sortable-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  dataMatrix[0].forEach((headerText, i) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    th.dataset.index = i;
    th.dataset.order = "none";
    th.addEventListener("click", () => sortTable(i, th));
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  renderRows(originalData);
  table.appendChild(tbody);
  container.appendChild(table);

  function renderRows(data) {
    tbody.innerHTML = '';
    data.forEach(rowData => {
      const row = document.createElement("tr");
      rowData.forEach(cellData => {
        const td = document.createElement("td");
        td.textContent = cellData;
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
  }

  function sortTable(columnIndex, th) {
    const ths = thead.querySelectorAll("th");
    ths.forEach(th => th.classList.remove("sorted-asc", "sorted-desc"));

    let order = th.dataset.order;
    if (order === "none") order = "asc";
    else if (order === "asc") order = "desc";
    else if (order === "desc") order = "none";

    th.dataset.order = order;

    ths.forEach(h => { if (h !== th) h.dataset.order = "none"; });

    if (order === "none") {
      renderRows(originalData);
      return;
    }

    const rows = originalData.slice();
    rows.sort((a, b) => {
      let valA = a[columnIndex];
      let valB = b[columnIndex];

      let numA = parseFloat(valA);
      let numB = parseFloat(valB);
      if (!isNaN(numA) && !isNaN(numB)) {
        return order === "asc" ? numA - numB : numB - numA;
      }

      let dateA = Date.parse(valA);
      let dateB = Date.parse(valB);
      if (!isNaN(dateA) && !isNaN(dateB)) {
        return order === "asc" ? dateA - dateB : dateB - dateA;
      }

      return order === "asc" ? String(valA).localeCompare(valB) : String(valB).localeCompare(valA);
    });

    th.classList.add(order === "asc" ? "sorted-asc" : "sorted-desc");
    renderRows(rows);
  }
})();
