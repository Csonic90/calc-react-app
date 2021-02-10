import React, { useState } from 'react'
import './App.css';

function App() {

  const [data, setData] = useState("");
  const [eql, setEql] = useState("");

  const changeSign = () => {
    setEql(String(eql === "" ? (eval(data) * (-1)) : (eval(eql) * -1)))
  }

  const useEql = (e) => {
    try {
      setEql(
        String(eval(data)).length > 3 &&
          String(eval(data)).includes(".")
          ? String(eval(data).toFixed(4))
          : String(eval(data))
      );
    } catch (e) {
      console.log(e);
    }
  }

  const buttonEfect = (e) => {
    setData(data + e.target.value)
  }


  return (
    <div className="app">
      <div className="calc-wrapper">
        <div className="input">
          <div className="input-data">{data}</div>
          <div className="eql">{eql}</div>
        </div>
        <div className="row">
          <button className="button-wrapper" onClick={buttonEfect} value="%">%</button>
          <button className="button-wrapper" onClick={changeSign} >+/-</button>
          <button className="button-wrapper" onClick={() => (setData(""), setEql(""))}>C</button>
          <button className="button-wrapper operator" onClick={buttonEfect} value=" / ">/</button>
        </div>
        <div className="row">
          <button className="button-wrapper" onClick={buttonEfect} value="7" >7</button>
          <button className="button-wrapper" onClick={buttonEfect} value="8" >8</button>
          <button className="button-wrapper" onClick={buttonEfect} value="9" >9</button>
          <button className="button-wrapper operator" onClick={(e) => setData(data + e.target.value)} value=" * " >x</button>
        </div>
        <div className="row">
          <button className="button-wrapper" onClick={(e) => setData(data + e.target.value)} value="4" >4</button>
          <button className="button-wrapper" onClick={(e) => setData(data + e.target.value)} value="5" >5</button>
          <button className="button-wrapper" onClick={(e) => setData(data + e.target.value)} value="6" >6</button>
          <button className="button-wrapper operator" onClick={(e) => setData(data + e.target.value)} value=" - " >-</button>
        </div>
        <div className="row">
          <button className="button-wrapper" onClick={(e) => setData(data + e.target.value)} value="1">1</button>
          <button className="button-wrapper" onClick={(e) => setData(data + e.target.value)} value="2">2</button>
          <button className="button-wrapper" onClick={(e) => setData(data + e.target.value)} value="3">3</button>
          <button className="button-wrapper operator" onClick={(e) => setData(data + e.target.value)} value=" + ">+</button>
        </div>
        <div className="row">
          <button className="button-wrapper" onClick={(e) => setData(data + e.target.value)} value="0">0</button>
          <button className="button-wrapper" onClick={(e) => setData(data + e.target.value)} value=".">,</button>
          <button className="button-wrapper equale"
            onClick={useEql}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
