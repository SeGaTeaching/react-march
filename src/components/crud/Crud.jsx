import { useState, useEffect } from 'react';

const API_URL = "http://127.0.0.1:8000/api/notes/";

function Crud() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      data.reverse();
      setNotes(data);
    } catch (err) {
      console.error("Fehler beim Laden der Notizen:", err);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${API_URL}${editingId}/` : API_URL
    try {
        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        // Einfach und schnell aber ineffizient
        //---------------------------------------
        // if (res.ok) {
        //     fetchNotes()
        // }

        // Besser, da ressourcen-schonender
        //-----------------------------------
        const data = await res.json();
        if (res.ok) {
            if (editingId) {
                setNotes(prev => prev.map((note) => {
                    return note.id === data.id ? data : note;
                }))
            } else {
                setNotes(prev => [data, ...prev]);
                
            }
            
        } else {
            console.error('Fehlerhafte API-Antwort', data);
        }

        // Formular zurücksetzen
        setForm({ title: '', content: '' });
        setEditingId(null);



    } catch (err) {
        console.error('Fehler beim Speicher:', err);
    }

  }

  async function handleDelete(id) {
    try {
        const res = await fetch(`${API_URL}${id}/`, {
            method: 'DELETE'
        })

        if (res.ok) {
            setNotes(prev => prev.filter(note => {
                return note.id !== id;
            }))
        } else {
            console.error('Löschen fehlgeschlagen');
        }
    } catch (err) {
        console.error('Fehler beim Löschen:', err);
    }
  }

  function handleEdit(note) {
    setForm({ title: note.title, content: note.content });
    setEditingId(() => note.id)
  }

  function handleChange(e) {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  }
  
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
        <h1>Notizen ({notes.length})</h1>

        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Titel"
            
            style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
            />
            <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Inhalt"
            
            style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
            />
            <button type="submit">
            {editingId ? 'Aktualisieren' : 'Erstellen'}
            </button>
        </form>

        <p>Selected Note ID: {editingId || 'none'}</p>

        <ul>
        {notes.map(note => (
          <li key={note.id} style={{ marginBottom: '1.5rem' }}>
            <strong>{note.title}</strong>
            <p>{note.content}</p>
            <button onClick={() => handleEdit(note)}>Bearbeiten</button>
            <button onClick={() => handleDelete(note.id)} style={{ marginLeft: '0.5rem' }}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Crud