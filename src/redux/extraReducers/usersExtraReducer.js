import { setLogin } from "../../api/login.api";
import { deleteUser, setUsersList } from "../../api/users.api";



export const deleteUserExtra = {
    [deleteUser.pending]: (state) => {
        state.user.status = 'Deleting user';
        state.user.error = null;
    },
    [deleteUser.fulfilled]: (state) => {
        state.user.status = 'Active';
        state.user.error = null;
    },
    [deleteUser.rejected]: (state, action) => {
        state.user.status = "Rejected deleting";
        state.user.error = action.payload;
    }
}

export const setUsersListExtra = {
    [setUsersList.pending]: (state) => {
        state.status = "Loading users list";
        state.error = null;
    },
    [setUsersList.fulfilled]: (state, action) => {
        state.status = "Active";
        state.error = null;
        state[action.payload.role].data = action.payload.data;
        state[action.payload.role].total = action.payload.total;
        if (action.payload.total > 10) {
            state[action.payload.role].current = action.payload.data.slice(0, 10);
        } else {
            state[action.payload.role].current = action.payload.data;
        }
    },
    [setUsersList.rejected]: (state, action) => {
        state.status = "Rejected loading users list";
        state.error = action.payload.data;
    }
}