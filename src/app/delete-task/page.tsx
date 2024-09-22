'use client'

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { CancelButton } from "../components/CancelButton/CancelButton"
import { DeleteButton } from "../components/DeleteButton/DeleteButton"
import { TitlePage } from "../components/TitlePage/TitlePage"
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'

export default function DeleteTask() {
    const params = useParams()
    const router = useRouter()

    const [listUpdated, setListUpdated] = useState('')


    const handleDeleteTask = () => {
    }

    return (
        <div className={globalStyles.backgroundLayerForModal}>
            <main className={globalStyles.modalMode}>

                <TitlePage
                    title="Deletar tarefa"
                />
                <p className={styles.deleteQuestion}>
                    Tem certeza que você deseja deletar essa tarefa?
                </p>

                <div className={styles.groupButtonsContainer}>
                    <DeleteButton
                        onClickResponse={handleDeleteTask}
                    />

                    <CancelButton />
                </div>
            </main>
        </div>
    )
}