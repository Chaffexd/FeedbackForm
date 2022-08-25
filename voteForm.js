const form = document.querySelector(".container");
const thankYouForm = document.getElementById("thankYou");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stops browser refresh
    const selected = "input[name=rating]:checked";         // grabs selected choice
    const checkedInput = document.querySelector(selected); // as above

    if(checkedInput !== null) {
        const selectedRating = document.querySelector(".selectionHolder"); // grabs the div 
        selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5";
        form.classList.add("hide");
        thankYouForm.classList.remove("hide");
    }
})