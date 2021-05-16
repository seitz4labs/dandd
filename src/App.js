import { useState } from "react";
import "./styles.css";

function allowDrop(ev) {
  console.log("allow drop " + ev);
  ev.preventDefault();
}

function drag(ev) {
  console.log("drag " + ev.target.id);
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  setFunc(ev.target.id);
  console.log("" + data + " to " + ev.target.id);
}

function DropZone(props) {
  return (
    <div
      id={props.did}
      onDrop={(event) => drop(event)}
      onDragOver={(event) => allowDrop(event)}
    >
      {props.children}
    </div>
  );
}

function DropElement(props) {
  const { name, text } = props;

  return (
    <div
      className="me"
      id={name}
      draggable={true}
      onDragStart={(event) => drag(event)}
    >
      {text}
    </div>
  );
}

export default function App() {
  const divs = ["div1", "div2", "div3"];

  const [h, setH] = useState("div1");
  const [b, setB] = useState("div2");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      {divs.map((divId) => (
        <DropZone did={divId}>
          {divId === h && <DropElement name="h" text="Hello" />}
          {divId === b && <DropElement name="b" text="Bye" />}
        </DropZone>
      ))}

      <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div
          className="me"
          id="b"
          draggable="true"
          onDragStart={(event) => drag(event)}
        >
          Bye
        </div>
      </div>

      <div
        id="div3"
        onDrop={(event) => drop(event)}
        onDragOver={(event) => allowDrop(event)}
      ></div>
    </div>
  );
}
