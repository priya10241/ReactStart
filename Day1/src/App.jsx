import './App.css'
import { useState, useRef, useEffect} from 'react';
function App() {
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   console.warn("You clicked on submit function")
  // };
  // return (
  //   <>
  //     <h1>This is React WebApp </h1>
  //     <form action="">
  //       <button type="submit" onClick={handleOnSubmit}>
  //         submit
  //       </button>
  //     </form>
     
  //   </>
  // );
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
      setCount(count+5);
    }, 1000)
  });

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count}</h1>
    </>
  );
}

export default App
