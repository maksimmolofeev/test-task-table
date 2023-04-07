import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { collectionsActions } from "../store/collectionsSlice"
import { nanoid } from "nanoid"
import './InputBlock.css'

const InputBlock = () => {
    const dispatch = useDispatch()

    const [taskValue, setTaskValue] = useState(null)
    const [dateValue, setDateValue] = useState(null)
    const [statusValue, setStatusValue] = useState(null)
    
    const {dates, tasks, statuses, events, intersection} = useSelector(state => state.collections)
    
    const addTask = () => {
        dispatch(collectionsActions.addTasks({id: nanoid(5), task: taskValue}))
        dispatch(collectionsActions.createArrCell())
        setTaskValue('')
    }

    const addDate = () => {
        dispatch(collectionsActions.addDates({id: nanoid(5), date: dateValue}))
        dispatch(collectionsActions.createArrCell())
        setDateValue('')
    }

    const addStatus = () => {
        dispatch(collectionsActions.addStatuses({id: nanoid(5), status: statusValue}))
        setStatusValue('')
    }

    const removeTask = (task) => {
        dispatch(collectionsActions.removeTask(task))
        dispatch(collectionsActions.createArrCell())
    }

    const removeDate = (date) => {
        dispatch(collectionsActions.removeDate(date))
        dispatch(collectionsActions.createArrCell())
    }

    const removeStatus = (status) => {
        dispatch(collectionsActions.removeStatus(status))
    }
    return (
        <div className="input_block">
            <div>
                <div>
                    <input
                    value={taskValue}
                    onChange={(e) => setTaskValue(e.target.value)}
                    type="text"
                    placeholder='Введите задачу'
                    />
                    <button onClick={addTask} >Добавить</button>
                </div>
                <div>
                    {tasks.map(task =>
                        <div style={{display: 'flex'}}>
                            <p key={task.id}>{task.task}</p>
                            <button onClick={() => removeTask(task)} className="remove_btn">X</button>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div>
                    <input
                    value={dateValue}
                    onChange={(e) => setDateValue(e.target.value)}
                    type="text"
                    placeholder='Введите дату'
                    />
                    <button onClick={addDate} >Добавить</button>
                </div>
                <div>
                    {dates.map(date =>
                        <div style={{display: 'flex'}}>
                            <p key={date.id}>{date.date}</p>
                            <button onClick={() => removeDate(date)} className="remove_btn">X</button>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div>
                    <input
                    value={statusValue}
                    onChange={(e) => setStatusValue(e.target.value)}
                    type="text"
                    placeholder='Введите статус'
                    />
                    <button onClick={addStatus} >Добавить</button>
                </div>
                <div>
                    {statuses.map(status =>
                        <div style={{display: 'flex'}}>
                            <p>{status.status}</p>
                            <button onClick={() => removeStatus(status)} className="remove_btn">X</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default InputBlock