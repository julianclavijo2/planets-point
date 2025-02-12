"use client";

import { useEffect } from 'react';
import { Card } from '../../components/shared/Card/Card';
import styles from './Planets.module.scss';
import { usePlanetStore } from '@/store'; 
import { Search } from '@/components/features/Search/Search';

export default function Planets() {

    const {
        planets,
        isLoading,
        filteredPlanets,
        setPlanets,
        setLoading,
    } = usePlanetStore();

    useEffect(() => {
        console.log("charge useeffect")
        const fetchPlanets = async () => {
            try {
                const data = await fetch('https://run.mocky.io/v3/96a53a54-c286-4f6a-b345-b6ecdd6c1229');
                const result = await data.json();
                setPlanets(result); 
            } catch (error) {
                console.error('Error fetching planets:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlanets();
    }, [setPlanets, setLoading]); 



    if (isLoading) {
        return (
            <div className={styles.loader}>
                <img src="/images/spinner.gif" alt="Loading planets" />
            </div>
        );
    }

    if (filteredPlanets().length === 0) {
        return (
            <div className={styles.container}>
         
                <h2>No se encontraron planetas</h2>
            </div>
        );
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
        
                {filteredPlanets().map((planet) => (
                    <div key={planet.id} className={styles.gridItem}>
                        <Card
                            id={planet.id}
                            title={planet.spanishName}
                            description={planet.description}
                            imageUrl={planet.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}