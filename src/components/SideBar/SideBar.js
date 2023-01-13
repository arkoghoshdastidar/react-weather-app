import styles from './SideBar.module.css';

const SideBar = (props) => {
    return (
        <div className={styles['sidebar']}>
            {props.children}
        </div>
    )
}

export default SideBar;