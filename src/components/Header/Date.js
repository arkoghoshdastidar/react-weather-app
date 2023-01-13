import classes from './Date.module.css';

const calculateHeading = (date) => {
    let str = '';
    let i = 0;
    while(date[i] !== ' ') i++; i++;
    while(date[i] !== ' ') {
        str += date[i]; i++;
    }
    str += ' '; i++;
    while(date[i] !== ' ') i++; i++;
    while(date[i] !== ' ') {
        str += date[i]; i++;
    }
    return str;
}

// Thursday, January 12, 2023

const calculateTitle = (date) => {
    let str = '';
    let cnt = 0;
    let i = 0;
    while(cnt < 3) {
        if(date[i] === ' ') cnt++;
        str += date[i];
        i++;
    }
    return str.substring(0, str.length-2);
}

const Date = ({ date_time_txt }) => {
    const mainHeading = calculateHeading(date_time_txt);
    const titleHeading = calculateTitle(date_time_txt);

    return (
        <div className={classes.cover}>
            <div className={classes.heading}>{mainHeading}</div>
            <div className={classes.title}>{titleHeading}</div>
        </div>
    )
}

export default Date;