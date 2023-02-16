import Link from "next/link";
import styles from "../styles/header.module.css";
const Header = () => {
    return (

        <div className={styles.header}>
            <div className={styles.conteiner}>
                <Link className={styles.link} href='/'>
                    Главная
                </Link>
                <Link className={styles.link} href='/projects'>
                    Проекты
                </Link>
                <Link className={styles.link} href="/authors">
                    Авторы
                </Link>
            </div>
        </div>

    )
};
export default Header;