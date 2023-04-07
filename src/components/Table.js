import { useDispatch, useSelector } from "react-redux";
import { collectionsActions } from "../store/collectionsSlice";
import './Table.css'
import CellItem from "./CellItem";
import { useState } from "react";

const Table = () => {
    const dispatch = useDispatch()

    const [optionState, setOptionState] = useState('')

    const {dates, tasks, statuses, intersection} = useSelector(state => state.collections)

    const changeDate = (e, date) => {
        const newDates = JSON.parse(JSON.stringify(dates))
        const indDate = dates.findIndex(d => d === date)
        newDates[indDate].date = e.target.value
        dispatch(collectionsActions.changeDate(newDates))
    }

    const changeTask = (e, task) => {
        const newTasks = JSON.parse(JSON.stringify(tasks))
        const indTask = tasks.findIndex(t => t === task)
        newTasks[indTask].task = e.target.value
        dispatch(collectionsActions.changeTask(newTasks))
    }

    return (
        <table border={1} cellPadding={5} cellSpacing={3}>
            <tr key="">
                <td className='cell'>Задачи/Даты</td>
                {dates.map(date => 
                    <td key={date.id} className='cell'>
                        <input className="input" type="text" value={date.date} onChange={e => changeDate(e, date)}/>
                    </td>
                )}
            </tr>
            {tasks.map(task => 
            <tr key="">
                <td>
                    <input className="input" type="text" value={task.task} onChange={e => changeTask(e, task)}/>
                </td>
                {intersection.map(cell =>
                task.id === cell.task.id ?
                <CellItem cell={cell}/> :
                null
                )}
            </tr>
            )}
        </table>
    );
}

export default Table