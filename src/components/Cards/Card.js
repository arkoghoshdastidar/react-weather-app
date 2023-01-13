import style from './Card.module.css';

const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.title}>{props.title}</div>
            <h1 className={style.value}>{props.value}</h1>
        </div>
    )
}

export default Card;