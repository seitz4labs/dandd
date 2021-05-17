import { useState } from "react";
import "./styles.css";

function allowDrop(ev) {
  console.log("allow drop " + ev);
  ev.preventDefault();
}

function drag(ev, dValue) {
  console.log("drag " + dValue);
  ev.dataTransfer.setData("text", dValue);
}

function drop(ev, dId, fB, fH) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log("" + data + " to " + dId);
  if (data === "b") {
    fB(dId);
  }
  if (data === "h") {
    fH(dId);
  }
}

function DropZone(props) {
  const { dId, children, fB, fH } = props;

  return (
    <div
      id={dId}
      onDrop={(event) => drop(event, dId, fB, fH)}
      onDragOver={(event) => allowDrop(event)}
    >
      {children}
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
      onDragStart={(event) => drag(event, name)}
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
        <DropZone dId={divId} key={divId} fH={setH} fB={setB}>
          {divId === h && <DropElement name="h" text="Hello" />}
          {divId === b && <DropElement name="b" text="Bye" />}
        </DropZone>
      ))}
    </div>
  );
}
