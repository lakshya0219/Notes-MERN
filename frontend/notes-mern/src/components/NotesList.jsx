import NoteCard from "./NoteCard";

export default function NotesList({ notes, onUpdate, onDelete }) {
  return (
    <div>
      {notes?.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
