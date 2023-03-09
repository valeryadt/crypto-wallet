import './btn.css'

function Btn({text, styling, link, type}) {
    return (
        <div>
            <button className={styling} type={type}><a href={link}>{text}</a></button>
        </div>
    )
}

export default Btn;