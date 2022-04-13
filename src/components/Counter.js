import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({type:'toggle'})
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    // dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: 'decrement' });
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
    // dispatch({ type: 'increase', amount: 10 });
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        {show && <div className={classes.value}>{counter}</div>}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
