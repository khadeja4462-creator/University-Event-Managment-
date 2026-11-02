const searchInput = document.getElementById("eventSearch");
const searchButton = document.getElementById("searchBtn");
const eventItems = document.querySelectorAll(".event-item");
const eventCount = document.getElementById("eventCount");
const noResults = document.getElementById("noResults");

function searchEvents() {
    const searchText = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    eventItems.forEach(event => {
        const title = event.dataset.title.toLowerCase();
        const category = event.dataset.category.toLowerCase();

        const matches =
            title.includes(searchText) ||
            category.includes(searchText);

        event.style.display = matches ? "" : "none";

        if (matches) {
            visibleCount++;
        }
    });

    eventCount.textContent = `${visibleCount} events available`;
    noResults.classList.toggle("d-none", visibleCount !== 0);
}

searchButton.addEventListener("click", searchEvents);

searchInput.addEventListener("input", searchEvents);