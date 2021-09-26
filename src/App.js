import React , { useState } from 'react';
import DragComponentList from "./components/DragComponentList";
import WorkSpace from "./components/WorkSpace";

const App = () => {
  const [component, setComponents] = useState([]);
  return (
    <div style={{display: 'block', position: 'relative', height: '90vh'}}>
      <div className="border box-sizing-border-box" style={{ display: 'inline-block', float: 'left', width: '15%', height: '100%'}}>
        <DragComponentList updateComponents={setComponents}/>
      </div>
      <div className="drop-component border box-sizing-border-box" style={{ display: 'inline-block', float: 'left', width: '80%', height: '100%', marginLeft:'2.5%' }}>
        <WorkSpace list={component}/>
      </div>
    </div>
  );
}

export default App;
