import { Countries } from "../pages/Countries";

import './App.sass';

export const App = () => {
  return (
    <div className='app'>
      <Countries className="countries" />
    </div>
  );
}