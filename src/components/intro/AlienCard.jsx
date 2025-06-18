import './AlienCard.css'
import Avatar from './Avatar'

function AlienCard(props) {

    return (
        <div className="card">
            <Avatar imageUrl={props.imageUrl} />
            <h2>Species: {props.species}</h2>
            <p>Heimatplanet: {props.planet}</p>
        </div>
    )
}

export default AlienCard