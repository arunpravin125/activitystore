import { useState,useEffect } from "react";


import axios from "axios";
import React from "react";

function App() {
  let [enterValue, setenterValue] = useState("");
  let [fruit, setfruit] = useState([""]);
  
  useEffect(function(){
    axios.get("http://localhost:5001/fruitlist").then(function(data){
    console.log(data.name)
      setfruit(data.data)
    })

  },[])
  



  function handleChange(eve) {
    setenterValue(eve.target.value);
  }
  function handleADD() {
   axios.post("http://localhost:5001/addfruit",{newfruit:enterValue})
    setfruit([...fruit,{name:enterValue}]);

    setenterValue("");
  }

  return (
    <div className="App">
      <input value={enterValue} onChange={handleChange}></input>
      <button onClick={handleADD}>ADD</button>

      {fruit.map(function (items,index) {
        return (
          <h1 key={index}>{items.name}</h1>
        )
      })}
    </div>
  );
}

export default App;
