const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

if (scrollContainer && backBtn && nextBtn) {
    scrollContainer.addEventListener(
        "wheel",
        (event) => {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
        },
        { passive: false }
    );

    backBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -scrollContainer.clientWidth, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: "smooth" });
    });
}
