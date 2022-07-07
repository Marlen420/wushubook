import { setForgotPassword, setLogin, setSignup } from "../../api/login.api";

export const loginExtraReducers = {
    [setLogin.pending]: (state) => {
        state.status = 'Loading';
        state.error = null;
    },
    [setLogin.fulfilled]: (state, action) => {
        state.status = "Resolved";
        state.login.isLogged = true;
        state.login.role = action.payload.role;
    },
    [setLogin.rejected]: (state, action) => {
        state.status = "Rejected";
        state.error = action.payload;
    }
}

export const signupExtraReducers = {
    [setSignup.pending]: (state) => {
        state.status = 'Sending signup link';
        state.error = null;
    },
    [setSignup.fulfilled]: (state, action) => {
        state.status = "Signup link sent";
        state.error = null;
    },
    [setSignup.rejected]: (state, action) => {
        state.status = "Rejected";
        state.error = action.payload;
    }
}

export const forgotPasswordExtraReducers = {
    [setForgotPassword.pending]: (state, action) => {
        state.status = "Sending forgot link";
        state.error = null;
    },
    [setForgotPassword.fulfilled]: (state, action) => {
        state.status = "Forgot password link sent";
        state.error = null;
    },
    [setForgotPassword.rejected]: (state, action) => {
        state.status = "Rejected";
        state.error = action.payload;
    }
}