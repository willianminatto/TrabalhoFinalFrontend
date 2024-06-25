import styles from './header.module.css'
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header id={styles.headerContainer}>
            <h1>Allregister</h1>
            <nav id={styles.navContainer}>
                <ul>
                    <li><Link to='/service'>Serviços</Link></li>
                    <li><Link to='/product'>Produtos</Link></li>
                    <li><Link to='/customer'>Clientes</Link></li>
                </ul>
            </nav>
        </header>
    )
}
