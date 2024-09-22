'use client'

import { Task_PropTypes } from "@/app/types/TasksProps"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { CancelButton } from "../../components/CancelButton/CancelButton"
import { DeleteButton } from "../../components/DeleteButton/DeleteButton"
import { TitlePage } from "../../components/TitlePage/TitlePage"
import globalStyles from '../../page.module.scss'
import styles from './page.module.scss'

export default function DeleteTask() {
    const params = useParams()
    const router = useRouter()

    const [listUpdated, setListUpdated] = useState<Task_PropTypes[]>()


    const handleDeleteTask = async () => {
        let getPendingTasks: string | null | any = await localStorage.getItem("pendingTasks")
        let getDoneTasks: string | null | any = await localStorage.getItem("doneTasks")

        let parseToDoList: [] | any = JSON.parse(getPendingTasks)
        let parseDoneList: [] | any = JSON.parse(getDoneTasks)

        let allTaskItems: [] | any = [...parseToDoList, ...parseDoneList]

        let deleteTaskSelected = allTaskItems.filter((task: Task_PropTypes) => task.id != Number(params.id))
        setListUpdated(deleteTaskSelected)

        return router.back()
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