import './App.css'
import AlienCard from './components/AlienCard'
import FrogImg from './assets/frosch2.png'
import CatImg from './assets/cat.png'

function App() {

  return (
    <>
      <h1>Willkommen im Alien Zoo</h1>
      <AlienCard 
        species="Glibberfrosch"
        planet="Quasar-9"
        imageUrl={FrogImg}
      />
      <AlienCard
        species="Kometenkatze"
        planet="Andromeda-2"
        imageUrl={CatImg}
      />
    </>
  )

}

export default App
