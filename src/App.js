import "./styles.css";

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      
      <div id="div1" ondrop={event => drop(event)} ondragover={event => allowDrop(event)}>
        <div className='me' id="h" draggable={true} ondragstart={event => drag(event)} >Hello</div>
      </div>

      <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div className='me' id="b" draggable="true" ondragstart="drag(event)" >Bye</div>
      </div>

      <div id="div2" ondrop={event => drop(event)} onDragover={event => allowDrop(event)}></div>
    </div>
  );
}
