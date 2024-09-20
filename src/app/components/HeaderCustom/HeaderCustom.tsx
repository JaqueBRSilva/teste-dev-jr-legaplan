import Image from 'next/image'
import Logo from '../../assets/logo.svg'
import styles from './HeaderCustom.module.scss'

export const HeaderCustom = () => {
    return (
        <>
            <header className={styles.header}>
                <Image
                    className={styles.logoSize}
                    src={Logo}
                    alt="logo Focal Point"
                    priority
                />

                <p className={styles.welcomeMsg}>
                    Bem-vindo de volta, Marcus
                </p>

                <p className={styles.weekdate}>
                    Segunda, 01 de dezembro de 2025
                </p>

            </header>

            <hr />
        </>
    )
}