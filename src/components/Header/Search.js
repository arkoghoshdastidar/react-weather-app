import classes from './Search.module.css';
import { UilSearch } from '@iconscout/react-unicons'
// import { useState } from 'react';
// import Spinner from '../UI/Spinner';
import { useRef } from 'react';

const Search = (props) => {
    // const [loadSpinner, setLoadSpinner] = useState('hide');
    const loc = useRef();

    // const inputFocusHandler = () => {
    //     setLoadSpinner('');
    // }

    // const removeSpinner = () => {
    //     setLoadSpinner('hide');
    // }

    const keyDownHandler = (e) => {
        if(e.key !== 'Enter') return;
        const location = loc.current.value.trim();
        if(location.length === 0) return;
        props.setLocation(location);
        loc.current.value = '';
    }

    return (
        <label className={classes["search"]}>
            <UilSearch color="#CCCFD2" size="50" />
            <input
                // onFocus={inputFocusHandler}
                // onBlur={removeSpinner}
                className={classes["search-bar"]}
                placeholder="search city name here"
                onKeyDown={keyDownHandler}
                ref={loc}
            />
            {/* <div className={`${classes["spinner-container"]} ${loadSpinner}`}>
                <Spinner />
            </div> */}
        </label>
    )
}

export default Search;