import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer id={styles.footerContainer}>
            <h2>Um jeito novo de cadastrar seus produtos</h2>
            <nav id={styles.navContainer}>
                <h3>Desenvolved by</h3>
                <ul>
                    <li>Luiz Linhares</li>
                    <li>Willian Minatto</li>
                </ul>
            </nav>
            
        </footer>
    )
}
