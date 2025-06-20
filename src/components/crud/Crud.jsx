import { useState, useEffect } from "react";

function Crud() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchNotes() {
    const API_URL = "http://127.0.0.1:8000/api/notes";

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Daten konnten nicht geladen werden.");
      }
      const data = await response.json();
      setNotes(data);
    } catch (e) {
      setError(e.message);
    }
  }
  useEffect(() => {
    try {
      fetchNotes();
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <p>Lade Produkte...</p>;
  }

  if (error) {
    return <p>Fehler: {error}</p>;
  }

  return (
    <div>
      <h2>Meine Notizen</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>
            <p>{note.content}</p>
            <p>{note.created_at}</p>
          </li>
        ))}
      </ul>
      {/* <button onClick={fetchNotes}>Daten laden</button> */}
    </div>
  );
}

export default Crud;
