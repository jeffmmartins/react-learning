import styles from './Produto.module.css'

export const Produto = () => {
    return(
        <>
            <h1 className={styles.titulo}>Notebook</h1>
            <p className={styles.preco}>R$ 2000,00</p>
        </>
    )
}