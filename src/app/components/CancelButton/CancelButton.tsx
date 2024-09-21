import { useRouter } from 'next/navigation'
import styles from './CancelButton.module.scss'

export const CancelButton: React.FC = () => {
    const router = useRouter()

    return (
        <div className={styles.buttonContainer}>
            <button
                type='button'
                className={styles.cancelButton}
                onClick={() => router.back()}
            >
                <p className={styles.textButton}>
                    Cancelar
                </p>
            </button>
        </div>
    )
}