"use client";

import { useParams } from 'next/navigation';
import { usePlanetStore } from '@/store';
import styles from './page.module.scss';
import { Footer } from '@/components/shared/Footer/Footer';

export default function PlanetDetail() {
    const { id } = useParams();
    const planets = usePlanetStore(state => state.planets);
    const planet = planets.find(p => p.id === id);

    if (!planet) {
        return (
            <div className={styles.errorContainer}>
                <h1>Planeta no encontrado</h1>
            </div>
        );
    }
    return (
        <>
            <div className={styles.detailContainer}>
                <div className={styles.planetInfo}>

                    <div className={styles.imageContainer}>
                        <h1>{planet.spanishName}</h1>
                        <img
                            src={`/images/${planet.img}`}
                            alt={`Imagen de ${planet.spanishName}`}
                        />
                        
                    </div>
                    <div className={styles.description}>
                      <p>  La temperatura promedio del planeta es : <b>{planet.detail.temperatura}</b> </p>
                      <p>  Su gravedad es de : <b> {planet.detail.gravedad} </b></p>
                      <p>  1 año en este planeta son : <b>{planet.detail.duracion_año}</b></p> 
                      <p>  Tiene un radio total de : <b> {planet.detail.radio}</b></p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}