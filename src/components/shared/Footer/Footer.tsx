import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Sobre Nosotros</h3>
                    <p>Explora el universo con nosotros. Descubre los secretos de los planetas y las maravillas del cosmos.</p>
                </div>
                <div className={styles.column}>
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li>Inicio</li>
                        <li>Planetas</li>
                        <li>Galaxias</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Contacto</h3>
                    <ul>
                        <li>📧 info@planetpoint.com</li>
                        <li>📱 +1 (555) 123-4567</li>
                        <li>🌎 Via Láctea, Sistema Solar</li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; 2024 Planets Point. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

