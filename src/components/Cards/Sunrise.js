import Card from './Card';
import styles from './details-card.module.css';
import { UilSun } from '@iconscout/react-unicons'

const Sunset = (props) => {
    return (
        <div className={styles.card}>
            <UilSun color="#05A0FF" size="60"/>
            <Card title="Sunrise" value={props.value} />
        </div>
    )
}

export default Sunset;