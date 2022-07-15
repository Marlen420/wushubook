import { createNewEvent, deleteEvent, setEventList } from "../../api/event.api";

// Delete event
export const deleteEventExtra = {
    [deleteEvent.pending]: (state) => {
        state.status = 'Deleting event';
        state.error = null;
    },
    [deleteEvent.fulfilled]: (state) => {
        state.status = 'Deleted event';
        state.error = null;
    },
    [deleteEvent.rejected]: (state, action) => {
        state.status = 'Rejected delete event';
        state.error = action.payload;
    }
}

// Create new event
export const createNewEventExtra = {
    [createNewEvent.pending]: (state) => {
        state.status = 'Creating event';
        state.error = null;
    },
    [createNewEvent.fulfilled]: (state) => {
        state.status = 'Created new event';
        state.error = null;
    },
    [createNewEvent.rejected]: (state, action) => {
        state.status = 'Rejected create event';
        state.error = action.payload;
    }
}

// All events
export const setEventListExtra = {
    [setEventList.pending]: (state) => {
        state.status = 'Loading';
        state.error = null;
    },
    [setEventList.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.error = null;
    },
    [setEventList.rejected]: (state, action) => {
        state.status = 'Rejected loading events';
        state.error = action.payload;
    }
}