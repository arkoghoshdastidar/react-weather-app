import Card from './Card';
import styles from './details-card.module.css';
import { UilWind } from '@iconscout/react-unicons'

const Wind = (props) => {
    return (
        <div className={styles.card}>
            <UilWind color="#05A0FF" size="60"/>
            <Card title="Wind Speed" value={props.value} />
        </div>
    )
}

export default Wind;