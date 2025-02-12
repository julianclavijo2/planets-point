
import styles from './Header.module.scss';
import { Search } from "../../features/Search/Search";
import { Filters } from "../../features/filters/Filters"; 


export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <h1>Planets Point</h1>
                </div>
                <Search />
             
                <ul className={styles.navLinks}>
                <Filters />
                </ul>
            </nav>
        </header>
    );
}




