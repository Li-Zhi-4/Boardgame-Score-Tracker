import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Ticket to Ride player scoring interface
export interface PlayerStats {
    score: number;
    longestPathLength: number;
    trains: {
        [length: number]: number;
    };
    destinations: number[];
}

// Defining the type of state as defined above
export interface ScoreState {
    [playerName: string]: PlayerStats;
}

// Setting the initial state to empty (i.e., no players exist yet)
const initialState: ScoreState = {};

const ticketToRideSlice = createSlice({
    name: "ticketToRide",
    initialState,
    reducers: {
        addPlayer: (state, action: PayloadAction<{ name: string }>) => {
            const { name } = action.payload;
            if (!(name in state)) {
                state[name] = {
                    score: 0,
                    longestPathLength: 0,
                    trains: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
                    destinations: [],
                }
            }
        },

        // This runs at the same time as adding other score types (except longestPath which is calculated at the end)
        incrementScore: (state, action: PayloadAction<{ name: string; amount?: number }>) => {
            const { name, amount = 1 } = action.payload;
            if (state[name]) {
                state[name].score += amount;
            }
        },

        // decrementScore (optional, can just add negative number using incrementScore)

        updateLongestPath: (state, action: PayloadAction<{ name: string; pathLength: number }>) => {
            const { name, pathLength } = action.payload;
            if (state[name]) {
                state[name].longestPathLength = pathLength;
            }
        },

        incrementTrainRoute: (state, action: PayloadAction<{ name: string; trainLength: number }>) => {
            const { name, trainLength } = action.payload;
            if (state[name] && state[name].trains[trainLength] !== undefined) {
                state[name].trains[trainLength]++;
            }
        },

        addDestination: (state, action: PayloadAction<{ name: string; points: number }>) => {
            const { name, points } = action.payload;
            if (state[name]) {
                state[name].destinations.push(points);
            }
        },

        resetPlayerStats: (state, action: PayloadAction<{ name: string }>) => {
            const name = action.payload.name;
            if (state[name]) {
                state[name] = {
                    score: 0,
                    longestPathLength: 0,
                    trains: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
                    destinations: []
                }
            }
        },

        removePlayer: (state, action: PayloadAction<{ name: string }>) => {
            delete state[action.payload.name];
        },

        resetAllPlayers: (state) => {
            Object.keys(state).forEach((name) => {
                state[name] = {
                    score: 0,
                    longestPathLength: 0,
                    trains: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
                    destinations: []
                };
            });
        },

    },
});

export const { 
    addPlayer, 
    incrementScore,
    updateLongestPath,
    incrementTrainRoute,
    addDestination,
    resetPlayerStats,
    removePlayer,
    resetAllPlayers,
} = ticketToRideSlice.actions;
export default ticketToRideSlice.reducer;