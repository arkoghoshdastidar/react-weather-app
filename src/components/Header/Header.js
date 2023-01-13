import classes from './header.module.css';
import Date from './Date';
import Search from './Search';

const Header = (props) => {
    if(!props.date_time_txt) {
        return <div className={classes['header-without-date']}>
            <Search setLocation={props.setLocation} />
        </div>
    }

    return (
        <div className={classes['header']}>
            <Date date_time_txt={props.date_time_txt} />
            <Search setLocation={props.setLocation} />
        </div>
    )
}

export default Header;