import './Avatar.css'

function Avatar(props) {
    return (
        <img src={props.imageUrl} alt="Alien" className="alien-img" />
    )
}

export default Avatar;