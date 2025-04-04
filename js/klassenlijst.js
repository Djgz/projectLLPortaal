const students = [
    "Nathan Albers", "Friso Berends", "Bart van Beusekom", "Koen Bogaard",
    "Bart Jan Bolt", "Michiel Boot", "Jurian van den Bor", "Rory Buijsmann",
    "Lotte de Vries", "Emma Jansen", "Sam de Boer", "Noah van Dijk",
    "Mila Bakker", "Daan Visser", "Sophie Smit", "Liam Peters",
    "Julia Hendriks", "Finn Dekker", "Tess Jacobs", "Lucas van der Meer",
    "Eva Brouwer", "Tom Meijer", "Sara Willems", "Max van Leeuwen",
    "Lina van Dam", "Jesse Bos", "Isa Hoekstra", "Tim van der Velden"
];

const perPage = 9;
let currentPage = 0;

function renderList() {
    const listElement = document.getElementById("studentList");
    listElement.innerHTML = "";

    const start = currentPage * perPage;
    const end = start + perPage;
    const visibleStudents = students.slice(start, end);

    visibleStudents.forEach(student => {
        const li = document.createElement("li");
        li.textContent = student;
        listElement.appendChild(li);
    });

    // Update paginering info
    document.getElementById("pageInfo").textContent = 
        `${start + 1} - ${Math.min(end, students.length)} van ${students.length}`;

    // Disable knoppen indien nodig
    document.getElementById("prevBtn").disabled = currentPage === 0;
    document.getElementById("nextBtn").disabled = end >= students.length;
}

function nextPage() {
    if ((currentPage + 1) * perPage < students.length) {
        currentPage++;
        renderList();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        renderList();
    }
}

// Init lijst
renderList();