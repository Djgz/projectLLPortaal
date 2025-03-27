document.addEventListener("DOMContentLoaded", function () {
    const fileList = document.getElementById("file-list");
    const backButton = document.getElementById("back-button");

    // Gesimuleerde bestandssysteemstructuur
    const fileStructure = {
        root: {
            "Decanaat": {
                "Havo en Vwo": {
                    "Vakkenvoorlichting": "file",
                    "Vmbo": "file"
                },
                "Rooster en oud-leerlingenavond.pdf": "file"
            },
            "Examenreglement": {
                "Examenreglement 2024-2025 (530 KB)": "file",
                "PTA havo-4 2024-2026 (2 MB)": "file",
                "PTA havo-5 2023-2025 (2 MB)": "file",
                "PTA vmbo-4 2024-2025 (1012 KB)": "file",
                "PTA vwo-4 2024-2027 (2 MB)": "file",
                "PTA vwo-5 2023-2026 (2 MB)": "file",
                "PTA vwo-6 2022-2025 (690 KB)": "file"
            },
            "Protocollen en regelingen": {
                "Brief privacy en Google SIVON Ichthus (114 KB)": "file",
                "Privacyreglement VO versie 2.2 juli 2020 (1 MB)": "file",
                "Verlofregeling leerlingen": "file"
            },
            "Roosters, dossiertoetsweek, herkansingen en uitgestelde toetsen":{
                "Rooster DT-1 2024-2025	(156 KB)": "file"
            },
            "Zo werkt het Ichthus": "file"
        }
    };

    let currentPath = ["root"];

    function renderFiles(pathArray) {
        fileList.innerHTML = "";
        let folder = fileStructure;

        // Ga naar de huidige map
        for (let part of pathArray) {
            folder = folder[part];
        }

        // Maak de lijst met bestanden en mappen
        for (let item in folder) {
            const li = document.createElement("li");
            if (typeof folder[item] === "object") {
                // Map
                li.classList.add("secondListStyle");
                li.innerHTML = `📁 <strong>${item}</strong>`;
                li.addEventListener("click", () => openFolder(item));
            } else {
                // Bestand
                li.classList.add("secondListStyle");
                li.innerHTML = `📄 <a href="/media/Dit_is_een_placeholder.pdf" download>${item}</a>`;
            }
            fileList.appendChild(li);
        }

        // Toon/verberg de terugknop
        backButton.style.display = pathArray.length > 1 ? "block" : "none";
    }

    function openFolder(folderName) {
        currentPath.push(folderName);
        renderFiles(currentPath);
    }

    backButton.addEventListener("click", function () {
        currentPath.pop();
        renderFiles(currentPath);
    });

    // Start in de root-map
    renderFiles(currentPath);
});