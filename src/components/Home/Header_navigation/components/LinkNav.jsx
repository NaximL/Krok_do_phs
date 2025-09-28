import { Link } from "react-router-dom";
import styles from '../HeaderNav.module.css';

const LinkNav = ({ url, text, image }) => {
    return (
        <li className={styles.navItem}>
            <Link to={url} className={styles.NavLink}>
                <img src={image} alt="Logo" />
                {text}
            </Link>
        </li>
    );
};

export default LinkNav;
