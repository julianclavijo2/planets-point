import styles from './Card.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface CardProps {
    id: string;
    title: string;
    description: String;
    imageUrl: string;
}

export const Card = ({ title, description, imageUrl , id }: CardProps) => {

    const router = useRouter();

    const detailClick = () => {
        router.push(`/planets/${id}`);
    };
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
                <button className={styles.button} onClick={detailClick}>
                    Curiosidades
                </button>
            </div>
        </div>
    );
};