import Card from './Card';
import styles from './details-card.module.css';
import { UilWater } from '@iconscout/react-unicons'

const Humidity = (props) => {
    return (
        <div className={styles.card}>
            <UilWater color="#05A0FF" size="60"/>
            <Card title="Humidity" value={props.value} />
        </div>
    )
}

export default Humidity;