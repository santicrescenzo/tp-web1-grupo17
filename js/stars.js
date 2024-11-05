document.addEventListener("DOMContentLoaded", function () {
    const starRatings = document.querySelectorAll(".star-rating");

    starRatings.forEach(starRating => {
        const rating = parseInt(starRating.getAttribute("data-rating"));
        
        // Crear estrellas
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.classList.add("star");
            if (i <= rating) {
                star.classList.add("checked");
            }
            star.innerHTML = "★";
            starRating.appendChild(star);
        }
    });
});