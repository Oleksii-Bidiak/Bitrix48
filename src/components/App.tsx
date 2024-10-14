import { useState } from 'react';
import cls from './app.module.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  console.log('cls', cls);

  return (
    <div className={cls.box}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};
