import {useState} from "react";
import './App.css'

function App() {
  const PREFIX = <span style={{color: "#004a50"}}>root@portfolio:~$</span>;

  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const commands = {
    help: (
      <ul>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
      </ul>
    ),
    about: (
      <div>
        <span>About Me</span>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    ),
    contact: (
      <div>
        <span>Contact</span>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    )
  };

  const handleCommand = () => {
    if (commands[input.toLowerCase()]) {
      setOutput(prevOutput => [
        ...prevOutput,
        <div>
          {commands[input.toLowerCase()]}
        </div>
      ])
    } else {
      setOutput(prevOutput => [
        ...prevOutput,
        <p style={{color: "red"}}>Command not Found</p>
      ])
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(prevOutput => [
      ...prevOutput,
      <p>
        {PREFIX} {input}
      </p>
    ])
    handleCommand();
    setInput("");
  };

  return (
    <div className="App">
      <div className="output">
        {output.slice(output.length - 6, output.length).map((element) => {
          return element
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.currentTarget.value)}
          value={input}
          placeholder="Start typing..."
        />
        <input type="submit" tabIndex="-1" hidden/>
      </form>
    </div>
  );
}

export default App;