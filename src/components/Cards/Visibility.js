import Card from './Card';
import styles from './details-card.module.css';
import { UilEye } from '@iconscout/react-unicons'

const Visibility = (props) => {
    return (
        <div className={styles.card}>
            <UilEye color="#05A0FF" size="60"/>
            <Card title="Visibility" value={props.value} />
        </div>
    )
}

export default Visibility;