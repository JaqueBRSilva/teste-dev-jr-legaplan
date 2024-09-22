import { IButton_Props } from '@/app/types/ButtonProps'
import styles from './AddNewTaskButton.module.scss'

export const AddNewTaskButton: React.FC<IButton_Props> = ({ ...buttonProps }) => {

    return (
        <div className={styles.buttonContainer}>
            <button
                type='button'
                className={styles.addNewTaskbutton}
                onClick={buttonProps.onClickResponse}
            >
                <p className={styles.textButton}>
                    {buttonProps.text}
                </p>
            </button>
        </div>
    )
}