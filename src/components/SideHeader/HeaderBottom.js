import styles from './SideHeader.module.css';

const HeaderBottom = ({ currentWeather }) => {
    return (
        <div className={styles['header-bottom']}>
            <div className={styles['temp']}>{`${(currentWeather.main.temp - 273.15).toFixed()}° C`}</div>
            <div className={styles['main']}>
                {`${currentWeather.weather[0].main}`}
                <div className={styles['small-text']}>
                    {`${currentWeather.weather[0].description.toUpperCase()}`}
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;