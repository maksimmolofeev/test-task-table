import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collectionsActions } from "../store/collectionsSlice";

const CellItem = ({cell}) => {
    const dispatch = useDispatch()
    const [optionState, setOptionState] = useState('')
    const {statuses, intersection} = useSelector(state => state.collections)

    const toggleStatus = (cell, value) => {
        setOptionState(value)
        const newIntersection = JSON.parse(JSON.stringify(intersection))
        const indStatus = statuses.findIndex(item => item.status === value)
        const indCell = intersection.findIndex(item => item === cell)
        newIntersection[indCell].status = statuses[indStatus]
        dispatch(collectionsActions.changeStatus(newIntersection))
    }

    const changeEvent = (e, cell) => {
        const newIntersection = JSON.parse(JSON.stringify(intersection))
        const indCell = intersection.findIndex(c => c === cell)
        newIntersection[indCell].event = e.target.value
        dispatch(collectionsActions.changeEvent(newIntersection))
    }

    return (
        <td className="cell">
            <input
                className="input"
                type="text" value={cell.event}
                onChange={e => changeEvent(e, cell)}
                placeholder="Добавить событие"
            />
            <select onChange={(e) => toggleStatus(cell, e.target.value)} value={optionState} >
                <option value=''>--статус--</option>
                {statuses.map(status => 
                    <option
                        key={nanoid(3)}
                        value={status.status}
                    >
                        {status.status}
                    </option>
                )}
            </select>
        </td>
    );
}

export default CellItem