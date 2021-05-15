import "./styles.css";

function allowDrop(ev) {
  console.log();
  ev.preventDefault();
}

function drag(ev) {
  console.log("drag " + ev.target.id);
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log("" + data + " to " + ev.target.id);
  //    ev.target.appendChild(document.getElementById(data));
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

export default function App() {
  const divs = ["div1", "div2", "div3"];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      {divs.map((x) => (
        <DropZone did={x}>y</DropZone>
      ))}

      <div
        id="div1"
        ondrop={(event) => drop(event)}
        ondragover={(event) => allowDrop(event)}
      >
        <div
          className="me"
          id="h"
          draggable={true}
          ondragstart={(event) => drag(event)}
        >
          Hello
        </div>
      </div>

      <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div className="me" id="b" draggable="true" ondragstart="drag(event)">
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
