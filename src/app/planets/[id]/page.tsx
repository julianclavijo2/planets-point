
"use client";

import { useParams } from 'next/navigation';
import { usePlanetStore } from '@/store';
import styles from './page.module.scss';
import { Footer } from '@/components/shared/Footer/Footer';
import Image from 'next/image';



export default function PlanetDetail() {
    const params = useParams();
    const { id } = params;
    const { planets } = usePlanetStore();
    const planet = planets.find(p => p.id === id);

    return (
        <>
         <div className={styles.detailContainer}>
             <div className={styles.planetInfo}>
                <div className={styles.imageContainer}>
                    <h1>{planet?.spanishName}</h1>
                    <Image
                        src={`/images/${planet?.img}`}
                        alt={`Imagen de ${planet?.spanishName}`}
                        width={500}
                        height={500}
                    />
                </div>
                <div className={styles.description}>
                    <p>La temperatura promedio del planeta es: <b>{planet?.detail.temperatura}</b></p>
                    <p>Su gravedad es de: <b>{planet?.detail.gravedad}</b></p>
                    <p>1 año en este planeta son: <b>{planet?.detail.duracion_año}</b></p>
                    <p>Tiene un radio total de: <b>{planet?.detail.radio}</b></p>
                </div>
            </div> 
          
        </div>
        <Footer /> 
        </>
    );
}
