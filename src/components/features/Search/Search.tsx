"use client";
import styles from './Search.module.scss';
import { useState } from 'react';
import { usePlanetStore } from '@/store';


export const Search = () => {
    const searchQuery = usePlanetStore(state => state.searchQuery);
    const setSearchQuery = usePlanetStore(state => state.setSearchQuery);
    console.log(searchQuery);
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Busca tus planetas favoritos"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

          
            
        </div>
    );
};