import styles from './HeaderNav.module.css';
import imgs from '../../../assets/imgs/logo.png';
import img1 from '../../../assets/imgs/nasl3.png';
import img2 from '../../../assets/imgs/telegram.svg';
import img3 from '../../../assets/imgs/brath.png';
import LinkNav from './components/LinkNav';
import { useRef, useState } from 'react';


const HeaderNav = () => {
    const [open, setOpen] = useState(false);
    const menu = useRef(null);
    const clk = () => {
        if (open) {
            menu.current.style = "transform:translateX(200%)";
            document.body.style.overflow = "auto"; 
            setOpen(!open);
        } else {
            menu.current.style = "transform:translateX(0px)";
            document.body.style.overflow = "hidden"; 
            setOpen(!open);
        }
    }
    return (
        <>              
        <div ref={menu} className={styles.mobile_menu}>
                    <LinkNav url="/help" image={img1} text={"Термінова допомога"} />
                    <LinkNav url="https://t.me/Mind_Haven_bot" image={img2} text={"Телеграм бот"} />
                    <LinkNav url="/card_chc" image={img3} text={"Ментальне здоров‘я"} />
        </div>
        <nav className={styles.nav}>
            <div className={styles.nav_row}>
                <div className={styles.logo}>
                    <a href='#'>Світло Надії</a>
                </div>
                <ul className={styles.navList}>
                    <LinkNav url="/help" image={img1} text={"Термінова допомога"} />
                    <LinkNav url="https://t.me/Mind_Haven_bot" image={img2} text={"Телеграм бот"} />
                    <LinkNav url="/card_chc" image={img3} text={"Кімната ментального здоров‘я   "} />
                </ul>
                <div onClick={clk} className={styles.mobile_menu_ico}>☰</div>
  
            </div>
        </nav>
        </>
    );
}

export default HeaderNav;