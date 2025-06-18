import { useState } from "react";

function Counter() {
    // 1. Sate initialisieren
    const [count, setCount] = useState(0);

    // 2. Funktion um den State zu ändern
    function increment() {
        setCount(count + 1)
    }

    function reset() {
        setCount(0)
    }

    // 3. Im JSX den State anzeigen und Funktion aufrufen
    return (
        <div>

            <h2>Counter Example</h2>

            <p>Aktueller Zählerstand: {count}</p>
            <button onClick={increment}>Erhöhen</button>
            <button onClick={reset}>Zurücksetzen</button>

        </div>
    )
}

export default Counter