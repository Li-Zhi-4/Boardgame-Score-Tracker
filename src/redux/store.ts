import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter/counterSlice";
import ticketToRideReducer from "./ticketToRide/ticketToRideSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        ticketToRide: ticketToRideReducer,
    },
});

export { store }; 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;