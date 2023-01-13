import styles from './FooterCard.module.css';
import { UilSun } from '@iconscout/react-unicons';
import { UilSunset } from '@iconscout/react-unicons';
// Fri Jan 13 2023 06:53:13 GMT+0530
const getEventTime = (time) => {
    let i = 0;
    let cnt = 0;
    while(cnt < 4) {
        if(time[i] == ' ') cnt++;
        i++;
    }
    let str = '';
    for(let j=0; j<5; j++) {
        str += time[i];
        i++;
    }
    return str;
}

const getHour = (currTime) => {
    return Math.round(parseInt(currTime.substring(0, 2)) + parseInt(currTime.substring(3, 5))/60);
}

const FooterCard = (props) => {
    let eveTime = new Date(props.eventTime*1000).toString();
    eveTime = getEventTime(eveTime);
    const currTime = props.currentTime.toString().substring(0, 5);

    const currHour = getHour(currTime);
    const eveHour = getHour(eveTime);
    const hoursGap = currHour - eveHour;
    let hoursLeft;
    if(hoursGap >= 0) {
        hoursLeft = hoursGap.toString() + ' hours ago';
    }else {
        hoursLeft = 'in '+Math.abs(hoursGap).toString()+' hours';
    }

    return (
        <div className={styles['footer-card']}>
            <div className={styles['small-container']}>
                {
                    props.type === 'Sunrise' ?
                    <UilSun size="50" /> :
                    <UilSunset size="50" />
                }
                <div className={styles['timing-container']}>
                    <div>{props.type}</div>
                    <div className={styles['timing']}>{eveTime}</div>
                </div>
            </div>
            <div>
                {hoursLeft}
            </div>
        </div>
    )
}

export default FooterCard;