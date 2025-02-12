import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


interface CardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const Card = ({ title, description, imageUrl, id }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={`/images/${imageUrl}`}
                    alt={`Imagen del planeta ${title}`}
                    width={50}
                    height={50}

                />
            </div>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>

                <Link className={styles.button} href={`/planets/${id}`}>
                    Curiosidades
                </Link>

            </div>
        </div>
    );
};