import React from 'react';
import DockNav from './navigation';

import './dock.css'

function Dock() {
  return (
    <div id='dock'>
      <DockNav />
      <div id='dock-info'>
        <h2>Today</h2>
      </div>
    </div>
  );
}

export default Dock;
