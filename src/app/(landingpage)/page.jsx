"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { decrement, increment } from "@/store/features/auth/authSlice";

function HomePage() {
  const { value } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HomePage;
