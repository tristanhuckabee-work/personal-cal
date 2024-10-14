import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'

function DockNav() {
  const [noti, setNoti] = useState(false);

  const signOut = () => {
    console.log('signed out');
  }
  

  return (
    <div id='dock-nav'>
      <h2>Welcome back Kevin</h2>
      <span>
        {
          (noti && <FontAwesomeIcon className="dni" icon={faEnvelope} size="2x" />)
          || <FontAwesomeIcon className="dni" icon={farEnvelope} size="2x" />
        }
        <FontAwesomeIcon className="dni" icon={faPersonRunning} size="2x" />
      </span>
    </div>
  );
}

export default DockNav;
