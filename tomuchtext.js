document.addEventListener("DOMContentLoaded", function () {
    const maxChars = 160; // Aantal tekens voordat de tekst wordt afgekapt

    document.querySelectorAll(".news-item").forEach((item) => {
        let textElement = item.querySelector(".news-text");
        let fullText = textElement.textContent.trim();

        // Verwijder bestaande "meer" link als die al in de HTML stond
        let existingReadMore = item.querySelector(".read-more");
        if (existingReadMore) {
            existingReadMore.remove();
        }

        if (fullText.length > maxChars) {
            let truncatedText = fullText.substring(0, maxChars).trim(); // Zorg ervoor dat er geen extra spaties zijn
            textElement.textContent = truncatedText; // Set de tekst zonder ellipsis eerst

            let readMore = document.createElement("a");
            readMore.href = "artikel.html"; // Link naar volledige nieuwsartikel
            readMore.classList.add("read-more");
            readMore.innerText = " meer";
            readMore.style.color = "blue";
            readMore.style.cursor = "pointer";

            // Voeg ... + de "meer" link toe
            textElement.appendChild(document.createTextNode("..."));
            textElement.appendChild(readMore);
        }
    });
});
