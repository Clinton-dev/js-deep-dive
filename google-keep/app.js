class App {
  constructor() {
    this.$formContainer = document.querySelector("#form-container");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$formButtons = document.querySelector("#form-buttons");

    this.handleEventListeners();
  }

  handleEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
    });
  }

  handleFormClick(event) {
    const isFormClicked = this.$formContainer.contains(event.target);
    console.log(isFormClicked);
    if (isFormClicked) {
      this.openForm();
    } else {
      this.closeForm();
    }
  }

  openForm() {
    this.$formContainer.classList.add("form-open");
    this.$noteTitle.style.display = "block";
    this.$formButtons.style.display = "block";
  }

  closeForm() {
    this.$formContainer.classList.remove("form-open");
    this.$noteTitle.style.display = "none";
    this.$formButtons.style.display = "none";
  }
}

new App();
