import './card.css'
import Btn from "../../header/btn/btn";

function Card(props) {
    const {name, description, image} = props.news
    console.log(props.news)
    return (
        <div className="card">
            <div className="card__img-container">
                <img src={image.contentUrl} alt="" className="card__img"/>
            </div>
            <div className="card__title">{name}</div>
            <div className="card__description">
                <p>{description.slice(0, 150).trim() + '...'}</p>
            </div>
            <div>
                <Btn text={"Read more"} styling="btn login" />
            </div>
        </div>
    )
}

export default Card;