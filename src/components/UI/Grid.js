import styles from './grid.module.css';
import Wind from '../Cards/Wind';
import Humidity from '../Cards/Humidity';
import Pressure from '../Cards/Pressure';
import Visibility from '../Cards/Visibility';

const Grid = ({currentWeather}) => {
    return (
        <div className={styles.grid}>
            <div className={styles["grid-heading"]}>Todays Overview</div>
            {/* Wind speed ---> metre/sec */}
            <Wind value={`${(currentWeather['wind']['speed'].toFixed()*3.6).toFixed()}kmph`}/>
            {/* Humidity % */}
            <Humidity value={`${currentWeather['main']['humidity']}%`}/>
            {/* Pressure ---> hPa */}
            <Pressure value={`${currentWeather['main']['pressure']}hPa`} />
            {/* Visibility --- > km */}
            <Visibility value={`${(currentWeather.visibility.toFixed())/1000}km`}/>
        </div>
    )
}

export default Grid;