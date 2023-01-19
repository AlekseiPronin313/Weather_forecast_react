import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import MonthStatistics from "./component/MonthStatistics/MonthStatistics";
import Header from "./component/Header/Header";
import {Popup} from "./component/Popup/Popup";

function App() {
  return (
      <div className="app">
          <Header/>
          <Routes>
              <Route path={'*'} element={<Navigate to='/'/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='month-statistics' element={<MonthStatistics/>}/>
          </Routes>
          <Popup/>
      </div>
  );
}

export default App;
