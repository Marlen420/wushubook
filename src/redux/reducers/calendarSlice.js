import { createSlice } from '@reduxjs/toolkit'
import { createNewEventCalendar, getEventCalendar } from '../../api/calendar';



const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        allEventForCalendar: [],

        status: {

            createEventStatus: null,

        },
        error: {
            createEventError: null
        }
    },

    extraReducers: {
        [getEventCalendar.pending]: (state, action) => {
            state.status.createEventStatus = 'Gettining event';
            state.error.createEventError = null
        },

        [getEventCalendar.fulfilled]: (state, action) => {
            state.status.createEventStatus = 'Geted event';
            state.allEventForCalendar = action.payload
        },

        [getEventCalendar.rejected]: (state, action) => {
            state.status.createEventStatus = 'Rejected geted event';
            state.error.createEventError = action.payload
        },




        [createNewEventCalendar.pending]: (state, action) => {
            state.status.createEventStatus = 'Creating event';
            state.error.createEventError = null
        },

        [createNewEventCalendar.fulfilled]: (state, action) => {
            console.log("a: ", action.payload)
            state.status.createEventStatus = 'Creted event';
            // state.news = [action.payload, ...state.news]
            state.allEventForCalendar = [action.payload, ...state.allEventForCalendar]
        },

        [createNewEventCalendar.rejected]: (state, action) => {
            state.status.createEventStatus = 'Rejected event to create';
            state.error.createEventError = action.payload
        },

    },
    reducers: {
        setEvent: (state, action) => {
            console.log("actionCALENDAR: ", action.payload)
            console.log("state: ", state)
            state.allEventForCalendar = action.payload
        }
    },

})

export const {
    setEvent
} = calendarSlice.actions
export default calendarSlice.reducer