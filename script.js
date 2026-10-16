function changeHeadingText() {
    var headingElement = document.getElementById("dontClick");
    headingElement.textContent = "I told you not to click here!";
    console.log("The forbidden button has been clicked! Oh no!");
}

document.querySelectorAll('.delayed-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetUrl = this.getAttribute('href'); 
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); 
  });
});
