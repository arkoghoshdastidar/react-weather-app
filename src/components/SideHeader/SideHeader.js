import styles from './SideHeader.module.css';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const SideHeader = (props) => {
    return (
        <div className={styles['side-header']}>
            <HeaderTop city={props.city} timezone={props.timezone} />
            <HeaderBottom currentWeather={props.currentWeather} />
        </div>
    )
}

export default SideHeader;