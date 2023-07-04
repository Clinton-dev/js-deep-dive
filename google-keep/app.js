class App {
  constructor() {
    this.notes = [];
    this.title = "";
    this.text = "";
    this.id = "";

    this.$formContainer = document.querySelector("#form-container");
    this.$form = document.querySelector("#form");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$formButtons = document.querySelector("#form-buttons");
    this.$notes = document.querySelector("#notes");

    this.handleEventListeners();
  }

  handleEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
    });

    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.title = this.$noteTitle.value;
      this.text = this.$noteText.value;
      const hasContent = Boolean(this.title) || Boolean(this.text);
      if (!hasContent) return;
      this.createNote({ title: this.title, text: this.text });
    });
  }

  handleFormClick(event) {
    const isFormClicked = this.$formContainer.contains(event.target);

    if (isFormClicked) {
      this.openForm();
    } else {
      // save note to notes if user clicks outside of the form
      this.title = this.$noteTitle.value;
      this.text = this.$noteText.value;
      const hasContent = Boolean(this.title) || Boolean(this.text);

      if (hasContent) {
        this.createNote({ title: this.title, text: this.text });
      }

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

  // TODO: Add note, display the notes in notes section, clear form
  // check for notes length, if its greater than 1
  // new id = previousNote.id + 1
  // else there is exist no notes and id is 1
  createNote(note) {
    const noteId =
      this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1;
    const newNote = { ...note, backgroundColor: "white", id: noteId };

    this.notes = [...this.notes, newNote];

    this.$noteTitle.value = "";
    this.$noteText.value = "";

    this.displayNotes();
  }

  displayNotes() {
    this.$notes.innerHTML = this.notes
      .reverse()
      .map(
        (note) => `
    <div style="background: ${note.backgroundColor};" class="note">
          <div class="${note.title && "note-title"}">${note.title}</div>
          <div class="note-text">${note.text}</div>
          <div class="toolbar-container">
            <div class="toolbar">
              <img class="toolbar-color" src="/images/palette.svg">
              <img class="toolbar-delete" src="/images/delete-icon.svg">
            </div>
          </div>
        </div>
    `
      )
      .join("");
  }
}

new App();
