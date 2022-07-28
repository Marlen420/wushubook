import { createClub, getAllClubs } from "../../api/club.api";

// Get all clubs
export const getAllClubsExtra = {
    [getAllClubs.pending]: (state) => {
        state.status = 'Loading clubs';
        state.error = null;
    },
    [getAllClubs.fulfilled]: (state, action) => {
        state.status = 'Active';
        state.error = null;
        state.data = action.payload;
    },
    [getAllClubs.rejected]: (state, action) => {
        state.status = 'Rejected loading clubs';
        state.error = action.payload;
    }
}

// Create new club
export const createClubExtra = {
    [createClub.pending]: (state) => {
        state.status = 'Creating new club';
        state.error = null;
    },
    [createClub.fulfilled]: (state) => {
        state.status = 'Created new club';
        state.error = null;
    },
    [createClub.rejected]: (state, action) => {
        state.status = 'Rejected create new club';
        state.error = action.payload;
    }
}