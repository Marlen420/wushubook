import { formProtocolByEvent, getProtocolByEvent } from "../../api/protocol";

// Form protocol by event
export const formProtocolByEventExtra = {
    [formProtocolByEvent.pending]: (state) => {
        state.status = 'Forming protocol';
        state.error = null;
    },
    [formProtocolByEvent.fulfilled]: (state) => {
        state.status = 'Active';
        state.error = null;
    },
    [formProtocolByEvent.rejected]: (state, action) => {
        state.status = 'Rejected form protocol';
        state.error = action.payload;
    }
}

// Get protocols by event
export const getProtocolByEventExtra = {
    [getProtocolByEvent.pending]: (state) => {
        state.status = 'Loading protocols';
        state.error = null;
    },
    [getProtocolByEvent.fulfilled]: (state, action) => {
        state.status = "Active";
        state.error = null;
        state.protocolList = action.payload;
    },
    [getProtocolByEvent.rejected]: (state, action) => {
        state.status = 'Rejected loading protocols';
        state.error = action.payload;
    }
}