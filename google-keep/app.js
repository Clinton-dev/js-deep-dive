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
    this.$placeholderContainer = document.querySelector("#placeholder");
    this.$formCloseButton = document.querySelector("#form-close-button");
    this.$modal = document.querySelector(".modal");
    this.$modalTitle = document.querySelector(".modal-title");
    this.$modalText = document.querySelector(".modal-text");
    this.$closeModalButton = document.querySelector(".modal-close-button");
    this.$colorToolTip = document.querySelector("#color-tooltip");

    this.handleEventListeners();
  }

  handleEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
      this.selectNote(event); // Helps get access to specific note
      this.openModal(event);
      this.deleteNote(event);
    });

    document.body.addEventListener("mouseover", (event) => {
      this.openTooltip(event);
    });

    document.body.addEventListener("mouseout", (event) => {
      this.closeTooltip(event);
    });

    this.$colorToolTip.addEventListener("mouseover", function () {
      this.style.display = "flex";
    });

    this.$colorToolTip.addEventListener("mouseout", function () {
      this.style.display = "none";
    });

    this.$colorToolTip.addEventListener("click", (event) => {
      const color = event.target.dataset.color;

      if (color) {
        this.editNotecolor(color);
      }
    });

    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.title = this.$noteTitle.value;
      this.text = this.$noteText.value;
      const hasContent = Boolean(this.title) || Boolean(this.text);
      if (!hasContent) return;
      this.createNote({ title: this.title, text: this.text });
    });

    this.$formCloseButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent bubbling
      this.closeForm(event);
    });

    this.$closeModalButton.addEventListener("click", (event) => {
      this.closeModal(event);
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

      this.closeForm(event);
    }
  }

  openForm() {
    this.$formContainer.classList.add("form-open");
    this.$noteTitle.style.display = "block";
    this.$formButtons.style.display = "block";
  }

  closeForm(event) {
    this.$formContainer.classList.remove("form-open");
    this.$noteTitle.style.display = "none";
    this.$formButtons.style.display = "none";
  }

  openModal(event) {
    if (event.target.matches(".toolbar-delete")) return;

    if (event.target.closest(".note")) {
      this.$modal.classList.toggle("open-modal");
      this.$modalTitle.value = this.title;
      this.$modalText.value = this.text;
    }
  }

  closeModal(event) {
    this.editNote(); // Edit note
    this.$modal.classList.toggle("open-modal");
  }

  openTooltip(event) {
    if (!event.target.matches(".toolbar-color")) return;
    this.id = event.target.dataset.id;
    const noteCoords = event.target.getBoundingClientRect();
    const horizontal = noteCoords.left;
    const vertical = noteCoords.top - 20;
    this.$colorToolTip.style.transform = `translate(${horizontal}px, ${vertical}px)`;
    this.$colorToolTip.style.display = "flex";
  }

  closeTooltip(event) {
    if (!event.target.matches(".toolbar-color")) return;
    this.$colorToolTip.style.display = "none";
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

  editNote() {
    const title = this.$modalTitle.value;
    const text = this.$modalText.value;

    // find post with respective id
    this.notes = [
      ...this.notes.map((note) => {
        if (note.id == Number(this.id)) {
          note.title = title;
          note.text = text;
        }
        return note;
      }),
    ];

    this.displayNotes();
  }

  editNotecolor(color) {
    // find post with respective id
    this.notes = [
      ...this.notes.map((note) => {
        if (note.id == Number(this.id)) {
          note.title = title;
          note.text = text;
        }
        return note;
      }),
    ];

    this.displayNotes();
  }

  deleteNote(event) {
    event.stopPropagation();
    if (!event.target.matches(".toolbar-delete")) return;
    const id = event.target.dataset.id;
    this.notes = this.notes.filter((note) => note.id != Number(id));
    this.displayNotes();
  }

  selectNote(event) {
    const $selectedNote = event.target.closest(".note");
    if (!$selectedNote) return;
    const [$noteTitle, $noteText] = $selectedNote.children; // give me an array of title and text input
    this.title = $noteTitle.innerText;
    this.text = $noteText.innerText;

    this.id = $selectedNote.dataset.id;
  }

  displayNotes() {
    // Hide placeholder div if there exists notes in our app
    this.$placeholderContainer.style.display =
      this.notes.length > 0 ? "none" : "block";

    this.$notes.innerHTML = this.notes
      .reverse()
      .map(
        (note) => `
    <div style="background: ${note.backgroundColor};" class="note" data-id="${
          note.id
        }">
          <div class="${note.title && "note-title"}">${note.title}</div>
          <div class="note-text">${note.text}</div>
          <div class="toolbar-container">
            <div class="toolbar">
              <img class="toolbar-color" src="/images/palette.svg">
              <img class="toolbar-delete" data-id="${
                note.id
              }" src="/images/delete-icon.svg">
            </div>
          </div>
        </div>
    `
      )
      .join("");
  }
}

new App();
