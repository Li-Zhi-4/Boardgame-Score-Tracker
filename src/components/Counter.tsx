import { decrement, increment, incrementByAmount, incrementAsync } from "@/redux/counter/counterSlice";
import { type AppDispatch, type RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux"

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}