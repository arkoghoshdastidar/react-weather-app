import Card from './Card';
import styles from './details-card.module.css';
import { UilTornado } from '@iconscout/react-unicons'

const Pressure = (props) => {
    return (
        <div className={styles.card}>
            <UilTornado color="#05A0FF" size="60"/>
            <Card title="Pressure" value={props.value} />
        </div>
    )
}

export default Pressure;