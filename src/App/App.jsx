import { RouterProvider } from "react-router-dom";

import {router} from "../Router"

import './App.sass';

export const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}