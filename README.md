# notes-web

This is a simple note-taking application that allows users to create, edit, and delete notes. The application uses localStorage to save and retrieve notes so that the content persists even after the page is refreshed or reopened.

## Features
 + Create a Note: Add new notes by clicking the "Add Note" button.
 + Edit Notes: Click on any note to edit its content. Notes are editable directly in the browser.
 + Delete Notes: Each note has a delete button (represented by an image). Click the delete icon to remove a note.
 + Persistence: Notes are saved in the browser's local storage, so they will persist across page reloads.
 + Line Break Support: Users can press Enter to insert a new line inside a note.

## How It Works

### HTML Structure
    .notes: The container where all the notes are displayed.
    .button: The button that allows users to add a new note.
    .write: Class applied to each individual note.
    
### JavaScript Logic
  + Loading Notes from LocalStorage: The prevNotes function loads any saved notes from localStorage and displays them inside the .notes container when the page is loaded.
  + Creating New Notes: When the user clicks the "Add Note" button, a new editable .`<p>` element is created and appended to the .notes container, along with a delete icon.
  + Editing Notes: Clicking on a note (the `<p>` tag) allows users to edit it. As the user types, the changes are automatically saved in localStorage.
  + Deleting Notes: Clicking on the delete icon (an `<img>` element) next to a note will remove that note from the page and update localStorage.
  + Handling Line Breaks: Pressing the Enter key while editing a note inserts a line break, allowing users to create multi-line notes.
  + Saving to LocalStorage: The updateStorage function saves the current state of the notes (the inner HTML of the .notes container) to localStorage, ensuring that any changes are preserved.
