import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incrementCounter,decrementCounter } from '../redux-hooks/actions';

export const Counter = (props) => {
    const counterVal = useSelector((state)=>state.updateCounter)
    const dispatch = useDispatch();
    return(
        <div>
            <form>
                <button onClick={(e)=>{e.preventDefault();dispatch(incrementCounter(5))}}>+</button>
                <input type="number" value={counterVal} readOnly></input>
                <button onClick={(e)=>{e.preventDefault();dispatch(decrementCounter())}}>-</button>
            </form>
        </div>
    )
}

