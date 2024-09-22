'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AddNewTaskButton } from '../components/AddNewTaskButton/AddNewTaskButton'
import { CancelButton } from '../components/CancelButton/CancelButton'
import { TitlePage } from '../components/TitlePage/TitlePage'
import { DATA_LIST } from '../data/dataList'
import pageGlobalStyles from '../page.module.scss'
import { IModal_Props } from '../types/ModalProps'
import { Task_PropTypes } from '../types/TasksProps'
import styles from './page.module.scss'


export default function NewTask({ ...modalProps }: IModal_Props) {
    const router = useRouter()

    const [newTask, setNewTask] = useState('')


    const handleCreateNewTask = () => {
        let previousList: Task_PropTypes[] = DATA_LIST
        let newTaskContent: Task_PropTypes

        try {
            newTaskContent = {
                id: Math.random(),
                taskDescription: newTask,
                taskStatus: 'pending'
            }

            previousList.push(newTaskContent)

        } catch (error) {
            console.error('ERRO AO SALVAR NOVA TAREFA: ', error)
        }

        router.back()
    }

    return (
        <div className={pageGlobalStyles.backgroundLayerForModal}>
            <main className={pageGlobalStyles.modalMode}>
                <TitlePage
                    title='Nova tarefa'
                />

                <label htmlFor='inputTxt'
                    className={styles.labelText}
                >
                    Título
                </label>

                <input
                    id='inputTxt'
                    name='inputTxt'
                    type='text'
                    maxLength={100}
                    className={styles.inputTxt}
                    placeholder={"Digite"}
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />

                <div className={styles.groupButtonsContainer}>
                    <AddNewTaskButton
                        text='Adicionar'
                        onClickResponse={() => handleCreateNewTask()}
                    />

                    <CancelButton />
                </div>
            </main>
        </div>
    )
}