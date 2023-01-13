import styles from './SideFooter.module.css';
import FooterCard from './FooterCard';

const SideFooter = ({ currentTime, sunrise, sunset }) => {

    return (
        <div className={styles['side-footer']}>
            <div className={"fluid"}>Sunrise & Sunset</div>
            <FooterCard type="Sunrise" currentTime={currentTime} eventTime={sunrise} />
            <FooterCard type="Sunset" currentTime={currentTime} eventTime={sunset} />
        </div>
    )
}

export default SideFooter;