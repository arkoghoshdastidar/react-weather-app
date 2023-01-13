import Card from './Card';
import styles from './details-card.module.css';
import { UilSunset } from '@iconscout/react-unicons'

const Sunset = (props) => {
    return (
        <div className={styles.card}>
            <UilSunset color="#05A0FF" size="60"/>
            <Card title="Sunset" value={props.value} />
        </div>
    )
}

export default Sunset;