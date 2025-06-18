import AlienCard from './AlienCard.jsx'
import FrogImg from '/src/assets/frosch2.png'
import CatImg from '/src/assets/cat.png'

function IntroPage() {
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

export default IntroPage