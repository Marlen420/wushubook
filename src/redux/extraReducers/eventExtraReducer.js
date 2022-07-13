import { createNewEvent, deleteEvent, setNewEventsList, setPastEventsList } from "../../api/event.api";

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

// Upcoming events list extra reducer
export const setNewEventsListExtra = {
    [setNewEventsList.pending]: (state) => {
        state.status = 'Loading';
        state.error = null;
    },
    [setNewEventsList.fulfilled]: (state, action) => {
        state.newEvents = action.payload;
        state.error = null;
    },
    [setNewEventsList.rejected]: (state, action) => {
        state.status = 'Rejected loading events';
        state.error = action.payload;
    }
}

// Passed events list extra reducer
export const setPastEventsListExtra = {
    [setPastEventsList.pending]: (state) => {
        state.status = 'Loading';
        state.error = null;
    },
    [setPastEventsList.fulfilled]: (state, action) => {
        state.pastEvents = action.payload;
        state.error = null;
    },
    [setPastEventsList.rejected]: (state, action) => {
        state.status = 'Rejected loading events';
        state.error = action.payload;
    }
}

