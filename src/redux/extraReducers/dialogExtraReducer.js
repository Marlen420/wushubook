import { getDialogs } from "../../api/dialogs";


export const getDialogsExtra = {
    [getDialogs.pending]: (state) => {
        state.status = 'Loading dialogs';
        state.error = null;
    },
    [getDialogs.fulfilled]: (state, action) => {
        state.status = 'Active';
        state.error = null;
        state.dialogs = action.payload;
    },
    [getDialogs.rejected]: (state, action) => {
        state.status = 'Rejected get dialogs';
        state.error = action.payload;
    }
}