const openModalBtn = document.getElementById("open-modal");
const modalContainer = document.getElementById("modal-container");
const cancelBtn = document.querySelector(".modal_cancel");
const continueBtn = document.querySelector(".modal_book");

openModalBtn.addEventListener("click", () => {
    modalContainer.classList.add("show");
    document.body.classList.add("modal-open");
});

cancelBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    document.body.classList.remove("modal-open");
});

continueBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    document.body.classList.remove("modal-open");
    window.location.href = "success.html"
});



