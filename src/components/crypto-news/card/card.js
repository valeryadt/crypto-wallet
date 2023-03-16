import './card.css'
import Btn from "../../header/btn/btn";

function Card(props) {
    const {name, description, image, url} = props.news

    function getImage(img) {
        if (img === undefined || img === null) {
            return '/img/notfound.png'
        } else {
            return img.contentUrl
        }
    }

    return (
        <div className="card">
            <div className="card__img-container">
                <img crossorigin src={getImage(image)} alt="" className="card__img"/>
            </div>
            <div className="card__title" title={name}>
                {name}
            </div>
            <div className="card__description">
                <p>{description.slice(0, 150).trim() + '...'}</p>
            </div>
            <div className="card__btn-container">
                <Btn text={"Read more"} styling="btn login card__btn" link={url}/>
            </div>
        </div>
    )
}

export default Card;