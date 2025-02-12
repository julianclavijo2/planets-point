"use client";
import styles from "./Filters.module.scss";
import { usePlanetStore } from '@/store'; // Importa el store

export const Filters = () => {
    const { sortAZ , setSortAZ , setItemsPerPage , itemsPerPage } = usePlanetStore();

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filterItem}>
                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={sortAZ}
                        onChange={(e) => setSortAZ(e.target.checked)}
                    />
                    <span className={styles.checkmark}></span>
                    <span className={styles.label}>A-Z</span>
                </label>
            </div>
 
            <div className={styles.filterItem}>
                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={itemsPerPage}
                        onChange={(e) => setItemsPerPage(e.target.checked)}
                    />
                    <span className={styles.checkmark}></span>
                    <span className={styles.label}>Mostrar 5 items</span>
                </label>
            </div> *
        </div>
    );
}

