'use client'

import { ITask_Props, Task_PropTypes } from '@/app/types/TasksProps'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CHECKBOX_UNCHECKED from '../../assets/Checkbox.png'
import CHECKBOX_CHECKED from '../../assets/Checked.png'
import Trash from '../../assets/trash.png'
import styles from './TaskList.module.scss'

export const TaskList: React.FC<ITask_Props> = ({ ...tasksProps }) => {
    const router = useRouter()

    const [toDoList, setToDoList] = useState<Task_PropTypes[]>()
    const [completedList, setCompletedList] = useState<Task_PropTypes[]>()
    const [isTaskChecked, setIsTaskChecked] = useState<boolean>(false)


    const readItemsList = async () => {
        let loadPendingTasks: string | any = await localStorage.getItem("pendingTasks")
        let loadDoneTasks: string | any = await localStorage.getItem("doneTasks")

        setToDoList(JSON.parse(loadPendingTasks))
        setCompletedList(JSON.parse(loadDoneTasks))
    }

    const handleOpenDeleteQuestion = (taskID: number) => {
        return router.push(`/delete-task/${taskID}`)
    }

    const handleChangeTaskStatus = (itemChecked: number) => {
        setIsTaskChecked(!isTaskChecked)
    }

    useEffect(() => {
        readItemsList()
    }, [])

    return (
        <>
            {
                tasksProps.taskListType == 'tasksForToday' ? (

                    toDoList?.map((listItem: Task_PropTypes, index) => (

                        <button type='button'
                            key={listItem.id}
                            className={styles.itemListButton}
                            value={listItem.id}
                            onClick={() => handleChangeTaskStatus(listItem.id)}
                        >

                            <Image
                                alt='checkbox'
                                src={CHECKBOX_UNCHECKED}
                                className={styles.checkboxUnselected}
                            />

                            <p className={styles.taskDescription}>
                                {listItem.taskDescription}
                            </p>

                            <div className={styles.trashButton}
                                onClick={() => handleOpenDeleteQuestion(listItem.id)}
                            >
                                <Image
                                    className={styles.trashImg}
                                    alt="trash icon"
                                    src={Trash}
                                />
                            </div>

                        </button>
                    ))

                ) : (

                    completedList?.map((listItem: Task_PropTypes) => (

                        <button type='button'
                            key={listItem.id}
                            className={styles.itemListButton}
                            value={listItem.id}
                            onClick={() => handleChangeTaskStatus(listItem.id)}
                        >

                            <Image
                                alt='checkbox'
                                src={CHECKBOX_CHECKED}
                                className={styles.checkboxChecked}
                            />

                            <p className={styles.taskDescriptionCompleted}>
                                {listItem.taskDescription}
                            </p>

                            <div className={styles.trashButton}
                                onClick={() => handleOpenDeleteQuestion(listItem.id)}
                            >
                                <Image
                                    className={styles.trashImg}
                                    alt="trash icon"
                                    src={Trash}
                                />
                            </div>

                        </button>
                    ))
                )
            }
        </>
    )
}