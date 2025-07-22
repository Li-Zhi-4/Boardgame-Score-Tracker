import { decrement, increment, incrementByAmount, incrementAsync } from "@/redux/counter/counterSlice";
import { type AppDispatch, type RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux"
import {
    addPlayer, 
    incrementScore,
    updateLongestPath,
    incrementTrainRoute,
    addDestination,
    resetPlayerStats,
    removePlayer,
    resetAllPlayers,
} from "@/redux/ticketToRide/ticketToRideSlice";
import { useEffect } from "react";

export function Counter() {
    // const count = useSelector((state: RootState) => state.counter.value);
    const score = useSelector((state: RootState) => state.ticketToRide);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(addPlayer({ name: "potato" }));
    }, [dispatch]);

    const potatoStats = score["potato"];

    if (!potatoStats) {
        return <div>Loading player data...</div>;
    }

    return (
        <div>
            <h2>Score: {potatoStats.score}</h2>
            <div>
                <button onClick={() => dispatch(incrementScore({ name: "potato", amount: 10 }))}>Increment</button>
                <button onClick={() => dispatch(incrementScore({ name: "potato", amount: -10 }))}>Decrement</button>
            </div>
        </div>
    )
}