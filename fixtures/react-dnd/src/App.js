import React, {useState} from 'react';
import './App.css';

import {DragSource, DropTarget, DragDropProvider} from 'react-dragdrop';

function App() {
  return (
    <div>
      <DragDropProvider>
        <DragSource category={'itm'} clonable={true}>
          <span>Drag Me!</span>
          {/* <span>Drag Me!</span> */}
          {/* <span>Drag Me!</span> */}
        </DragSource>
        <DragSource category={'itm'}>
          <span style={{backgroundColor: 'white'}}>Drag Me Too!</span>
        </DragSource>
        <DragSource className="a b c">
          <span style={{backgroundColor: 'white'}}>
            Drag Me Too By className!
          </span>
        </DragSource>
        <br />
        <br />
        <br />
        <br />
        <DropTarget canDropByClassNames="a">
          <div style={{height: 200, width: 200, backgroundColor: 'red'}}>
            asljfaskob
          </div>
        </DropTarget>
        <DropTarget>
          <div style={{height: 200, width: 200, backgroundColor: 'blue'}} />
        </DropTarget>
      </DragDropProvider>
    </div>
  );
}

export default App;
