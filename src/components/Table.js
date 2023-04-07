import { useDispatch, useSelector } from "react-redux";
import { collectionsActions } from "../store/collectionsSlice";
import './Table.css'
import CellItem from "./CellItem";

const Table = () => {
    const dispatch = useDispatch()

    const {dates, tasks, statuses, intersection} = useSelector(state => state.collections)
    
    const toggleStatus = (cell, value) => {
        const newIntersection = JSON.parse(JSON.stringify(intersection))
        const indStatus = statuses.findIndex(item => item.status === value)
        const indCell = intersection.findIndex(item => item === cell)
        newIntersection[indCell].status = statuses[indStatus]
        dispatch(collectionsActions.changeStatus(newIntersection))
    }

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

    const changeEvent = (e, cell) => {
        const newIntersection = JSON.parse(JSON.stringify(intersection))
        const indCell = intersection.findIndex(c => c === cell)
        newIntersection[indCell].event = e.target.value
        dispatch(collectionsActions.changeEvent(newIntersection))
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
                <CellItem 
                    cell={cell}
                    toggleStatus={toggleStatus}
                    changeEvent={changeEvent}
                /> :
                null
                )}
            </tr>
            )}
        </table>
    );
}

export default Table