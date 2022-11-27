import React, { useState } from "react";
import "./Paragraph.css";
import "./Style.css";
import ReactDOM from "react-dom";

export default function Paragraph() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(0);
  const [items, setItems] = useState([]);
  const [isLightOn, setLight] = useState(true);
  const [itemName, setItemName] = useState("");
  const numbers = [1, 4, 9, 7, 3, 2];
  const doubles = numbers.map((num) => num * 2);
  const addItem = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
      },
    ]);
    setItemName("");
  };

  const lightedness = isLightOn ? "lit" : "dark";
  const flipLight = () => {
    setLight(!isLightOn);
  };
  const [number, setNumbers] = useState([]);

  const addNumber = () => {
    // The "updater" form (passing a function that receives the old state and returns the new one) is
    // the safest choice when the new state depends on the old state. It guarantees that the old state
    // won't be stale (which can happen if you're accessing old state from inside a closure).
    var maxNumber = 4111111111111;
    // setNumbers(nums => [...nums, Math.floor((Math.random() * maxNumber) + 1)]);
    setNumbers((nums) => [...nums, Math.floor(Math.random() * 100000)]);

    /* In this example, this would work too. Why won't "numbers" be stale, here, even though addNumber is a closure? */
    // setNumbers([...numbers, Math.random()]);

    /* This won't work, because pushing onto an array doesn't replace the original array,
    and React won't re-render unless the state value looks new. Try it out: */
    // numbers.push(Math.random());
    // setNumbers(numbers);
  };

  let className = "menu";
  if (!isLightOn) {
    className += "menu-active";
  }
  return (
    <div className="inner-div">
      <div className="para">
        {/* <h1>I am para</h1> */}
        {/* <p className='para-text'>sdbvucbdshvbdsbvjksdnzkvnzkjvbkjfbvkdbfkvbdfnvdnflvnflkjbnkdf</p> */}
        <div className="slideshow-container">
          {/* <div className="mySlides fade">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_CeO5YPV3_A5znkG_6nOclWW1jOfg78txQ&usqp=CAU" />
        <div className="text">Caption Text</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_CeO5YPV3_A5znkG_6nOclWW1jOfg78txQ&usqp=CAU" />
        <div className="text">Caption Text</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_CeO5YPV3_A5znkG_6nOclWW1jOfg78txQ&usqp=CAU" />
        <div className="text">Caption Text</div> */}
          <button onClick={() => setCount(count + 1)}>Count</button>
          <input type="number" min="0" step="0" value={count} name="count" />
          <button onClick={() => setCount(count > 0 ? count + -1 : 0)}>
            Undo
          </button>

          <button onClick={() => setSteps((prevState) => prevState + 1)}>
            I took another steps {steps}
          </button>

          <form onSubmit={addItem}>
            <label>
              <input
                name="item"
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </label>
          </form>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <ul>
            {doubles.map((doubles) => (
              <li key={doubles}>{doubles}</li>
            ))}
          </ul>
          {/* <div className={`room ${lightedness}`}> */}
          <div className={!isLightOn ? "lit" : "dark"}>
            the room is {lightedness}
            <br />
            <button onClick={flipLight}>flip</button>
          </div>
          <div>
            <h1>Random Numbers</h1>
            <button onClick={addNumber}>Add a Number</button>
            <ul>
              {number.map((number, index) => (
                <li key={index}>{parseInt(number)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
