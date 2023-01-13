import styles from './SideHeader.module.css';

const HeaderTop = ({city, timezone}) => {
    return (
        <div className={styles['header-top']}>
            <div>{ `${city[0].toUpperCase() + city.substring(1).toLowerCase()}, ${timezone.geo.country}` }</div>
            <div>{ timezone.time_12.substring(0, 5) + timezone.time_12.substring(9, 11) }</div>
        </div>
    )
}

export default HeaderTop;