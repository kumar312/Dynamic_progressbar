import React from "react";
import "./App.css";

function App() {
  const move = () => {
    var elem = document.getElementById("mybar");
    var width = 1;
    var id = setInterval(frame, 10)

    function frame(){
      if(width >= 100){
        clearInterval(id);
      }else{
        width++;
        elem.style.width = width + "%";
        document.getElementById("incvalue").innerHTML = width + "%";
      }
    }

  }
  return (
    <>
      <h1 className="heading">Dynamic animated progressbar</h1>

      <div className="myprogress">
        <div id="mybar">
          <span id="incvalue">1%</span>
        </div>
      </div>
      <br /> <button onClick={move}>click me</button>
    </>
  );
}

export default App;
