const initSlider = () => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const imageList = sliderWrapper.querySelector(".center_div");
    const slideButtons = sliderWrapper.querySelectorAll(".slide-button");

    let maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    const scrollAmount = imageList.clientWidth;

    const handleSlideButtons = () => {
        slideButtons[0].style.visibility = imageList.scrollLeft <= 0 ? "hidden" : "visible";
        slideButtons[1].style.visibility = imageList.scrollLeft >= maxScrollLeft ? "hidden" : "visible";
    };

    sliderWrapper.addEventListener("click", (event) => {
        const button = event.target.closest(".slide-button");
        if (button) {
            const direction = button.id === "prev-slide" ? -1 : 1;
            imageList.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
        }
    });

    imageList.addEventListener("scroll", handleSlideButtons);
};

window.addEventListener("load", initSlider);
