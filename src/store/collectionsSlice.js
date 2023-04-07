import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
    tasks: [],
    dates: [],
    statuses: [],
    intersection: []
}
export const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        addTasks: (state, action) => {
            state.tasks = [...state.tasks, action.payload]
        }, 
        addDates: (state, action) => {
            state.dates = [...state.dates, action.payload]
        },
        addStatuses: (state, action) => {
            state.statuses = [...state.statuses, action.payload]
        },
        createArrCell: (state) => {
            const arrCell = []
            if (state.tasks.length > 0 && state.dates.length > 0) {
                state.tasks.forEach(task => 
                    state.dates.forEach(date => 
                        arrCell.push({
                            id: nanoid(5),
                            task: task,
                            date: date,
                            status: null,
                            event: ''
                        })
                    )
                )
            }
            state.intersection = arrCell
        },
        changeStatus: (state, action) => {
            state.intersection = action.payload
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task === action.payload)
            state.tasks.splice(index, 1)
        },
        removeDate: (state, action) => {
            const index = state.dates.findIndex(date => date === action.payload)
            state.dates.splice(index, 1)
        },
        removeStatus: (state, action) => {
            const index = state.statuses.findIndex(status => status === action.payload)
            state.statuses.splice(index, 1)
        },
        changeDate: (state, action) => {
            state.dates = action.payload
        },
        changeTask: (state, action) => {
            state.tasks = action.payload
        },
        changeEvent: (state, action) => {
            state.intersection = action.payload
        }
    },
})

export const {actions: collectionsActions} = collectionsSlice

export default collectionsSlice