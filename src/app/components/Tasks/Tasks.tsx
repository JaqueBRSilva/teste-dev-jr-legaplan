'use client'

import { DATA_LIST } from '@/app/data/dataList'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { AddNewTaskButton } from '../AddNewTaskButton/AddNewTaskButton'
import { TaskList } from '../TaskList/TaskList'
import styles from './Tasks.module.scss'


export const Tasks = () => {
    const router = useRouter()

    const filterTasksByPendingStatus = async () => {
        let pendingTasks = DATA_LIST.filter((item) => {
            return item.taskStatus == 'pending'
        })

        await localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks))
    }

    const filterTasksByDoneStatus = async () => {
        let doneTasks = DATA_LIST.filter((item) => {
            return item.taskStatus == 'done'
        })

        await localStorage.setItem("doneTasks", JSON.stringify(doneTasks))
    }

    const handleNavigateForNewTaskPage = () => {
        return router.push('/new-task')
    }

    useEffect(() => {
        filterTasksByPendingStatus()
        filterTasksByDoneStatus()
    }, [])


    return (
        <div className={styles.container}>

            <div className={styles.tasksArea}>

                <p className={styles.taskSectionTitle}>
                    Suas tarefas de hoje
                </p>

                <TaskList
                    taskListType='tasksForToday'
                />

                <p className={styles.taskSectionTitle}>
                    Tarefas finalizadas
                </p>

                <TaskList
                    taskListType='tasksDone'
                />

            </div>

            <AddNewTaskButton
                text='Adicionar nova tarefa'
                onClickResponse={() => handleNavigateForNewTaskPage()}
            />

        </div>
    )
}