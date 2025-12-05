import './components/app-bar.js';
import './components/note-item.js';
import './components/note-list.js';
import { notes } from './notes.js';

const noteForm = document.querySelector('#noteForm');
const noteListElement = document.querySelector('note-list');

// tampilkan data dummy di awal
noteListElement.notes = notes;

noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.elements['title'].value;
  const body = e.target.elements['body'].value;
  const newNote = {
    id: Date.now().toString(),
    title,
    body,
    createdAt: new Date().toISOString(),
    archived: false,
  };
  notes.push(newNote);
  noteListElement.notes = notes;
  noteForm.reset();
});