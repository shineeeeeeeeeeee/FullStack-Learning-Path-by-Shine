
import './App.css';

const App = () => {

  function handClick(){
    alert("I have been clicked!")
  }
  function handleMouseOver(){
    alert("I have been mouse over!")
  }
  function handleInput(e){
    console.log("Values have been changed to: ", e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    // custom behavior
    alert("Form submitted!")
  }

  return(
    <div>
      {/* will display alert even when not clicked -> this is called immediate invocation */}
      {/* <button onClick={alert("Button has been clicked!")}>
        Click me!
      </button> */}

      {/* to improve should write in this way -> onClick={() => alert("message")} */}

        {/* try this out! */}
      {/* https://codesandbox.io/p/sandbox/5drfn3?file=%2Fsrc%2FApp.js%3A17%2C1 */}
      {/* https://codesandbox.io/p/sandbox/r8255g?file=%2Fsrc%2FApp.js%3A6%2C13 */}

      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={handleInput} />
        <button type='submit'>Submit</button>
      </form>

      <p onMouseOver={handleMouseOver}>
        I am a paragraph.
      </p>

      <button onClick={handClick}>
        Click me!
      </button>
    </div>
  )
}

export default App
