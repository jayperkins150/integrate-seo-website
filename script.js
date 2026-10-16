function changeHeadingText() {
    const headingElement = document.getElementById("dontClick");

    if (headingElement) {
        headingElement.textContent = "I told you not to click here!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".delayed-link").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            if (link.classList.contains("is-expanding")) {
                return;
            }

            const targetUrl = link.href;

            link.classList.add("is-expanding");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1000);
        });
    });
});
