import { useState } from "react";
import {
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} from "./api/notesApi";
import NotesList from "./components/NotesList";

function App() {
  const { data: notes, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();
  const [updateNote] = useUpdateNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = async () => {
    if (!title || !content) return;

    await addNote({ title, content }).unwrap(); // triggers invalidation
    setTitle("");
    setContent("");
  };

  const handleUpdate = async (note) => {
    await updateNote(note).unwrap(); // triggers invalidation
  };

  const handleDelete = async (id) => {
    await deleteNote(id).unwrap(); // triggers invalidation
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Notes App</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ width: "100%", marginBottom: "5px" }}
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        style={{ width: "100%", marginBottom: "5px" }}
      />
      <button onClick={handleAdd}>Add Note</button>

      {/* Pass the fetched notes and handlers to NotesList */}
      <NotesList notes={notes} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
