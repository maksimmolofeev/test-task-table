import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

const CellItem = (props) => {
    const {
        cell,
        changeEvent,
        toggleStatus,
    } = props

    const statuses = useSelector(state => state.collections.statuses)
    return (
        <td className="cell">
            <input
                className="input"
                type="text" value={cell.event}
                onChange={e => changeEvent(e, cell)}
                placeholder="Добавить событие"
            />
            <select onChange={(e) => toggleStatus(cell, e.target.value)} >
                <option value=''>--статус--</option>
                {statuses.map(status => <option key={nanoid(3)} value={status.status}>{status.status}</option>)}
            </select>
        </td>
    );
}

export default CellItem