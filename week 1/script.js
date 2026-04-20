let students = [];
let oldVDOM = [];

// --------------------
// RENDER TABLE
// --------------------
function render() {
  const table = document.getElementById("tableBody");
  table.innerHTML = "";

  students.forEach((s, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.status}</td>
      <td>
        <button onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    table.appendChild(row);
  });
}

// --------------------
// ADD STUDENT
// --------------------
function addStudent() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;

  if (!id || !name) {
    alert("Enter all fields");
    return;
  }

  students.push({ id, name, status });
  render();
}

// --------------------
// UPDATE STUDENT
// --------------------
function updateStudent() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;

  const index = students.findIndex(s => s.id == id);

  if (index === -1) {
    alert("Student not found");
    return;
  }

  students[index] = { id, name, status };
  render();

  setTimeout(() => {
    document.getElementById("tableBody").rows[index].classList.add("updated");
  }, 50);
}

// --------------------
// DELETE STUDENT
// --------------------
function deleteStudent(index) {
  students.splice(index, 1);
  render();
}

// --------------------
// DIRECT DOM UPDATE
// --------------------
function updateDOM() {
  console.time("DOM");

  const table = document.getElementById("tableBody");

  students.forEach((s, i) => {
    s.status = Math.random() > 0.5 ? "Present" : "Absent";

    if (table.rows[i]) {
      table.rows[i].cells[2].textContent = s.status;
    }
  });

  console.timeEnd("DOM");
}

// --------------------
// VIRTUAL DOM
// --------------------
function createVDOM(data) {
  return data.map(s => ({
    id: s.id,
    status: s.status
  }));
}

function diff(oldVDOM, newVDOM) {
  let changes = [];

  newVDOM.forEach((newNode, i) => {
    const oldNode = oldVDOM[i];

    if (!oldNode || oldNode.status !== newNode.status) {
      changes.push(i);
    }
  });

  return changes;
}

function patch(changes, newVDOM) {
  const table = document.getElementById("tableBody");

  changes.forEach(i => {
    if (table.rows[i]) {
      table.rows[i].cells[2].textContent = newVDOM[i].status;
      table.rows[i].classList.add("updated");
    }
  });
}

// --------------------
// VDOM UPDATE
// --------------------
function updateVDOM() {
  console.time("VDOM");

  students.forEach(s => {
    s.status = Math.random() > 0.5 ? "Present" : "Absent";
  });

  const newVDOM = createVDOM(students);

  if (oldVDOM.length === 0) {
    oldVDOM = createVDOM(students);
  }

  const changes = diff(oldVDOM, newVDOM);
  patch(changes, newVDOM);

  oldVDOM = newVDOM;

  console.timeEnd("VDOM");
}