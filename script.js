function changeHeadingText() {
    var headingElement = document.getElementById("dontClick");
    headingElement.textContent = "I told you not to click here!";
    console.log("The forbidden button has been clicked! Oh no!");
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".delayed-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Prevent multiple clicks during the animation
            if (this.classList.contains("is-expanding")) {
                return;
            }

            const targetUrl = this.href;

            // Trigger the CSS animation
            this.classList.add("is-expanding");

            // Navigate after the expansion finishes
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 700);
        });
    });
});
