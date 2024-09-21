import styles from './TitlePage.module.scss'

interface ITitle_Props {
    title: string;
}

export const TitlePage: React.FC<ITitle_Props> = ({ ...props }) => {
    return (
        <>
            <header className={styles.titleContainer}>
                <h1 className={styles.title}>
                    {props.title}
                </h1>
            </header>
        </>
    )
}