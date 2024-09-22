import { IButton_Props } from '@/app/types/ButtonProps'
import styles from './DeleteButton.module.scss'

export const DeleteButton: React.FC<IButton_Props> = ({ ...buttonProps }) => {

    return (
        <div className={styles.buttonContainer}>
            <button
                type='button'
                className={styles.deleteButton}
                onClick={buttonProps.onClickResponse}
            >
                <p className={styles.textButton}>
                    Deletar
                </p>
            </button>
        </div>
    )
}