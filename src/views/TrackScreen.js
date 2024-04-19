import React, { useEffect, useState } from 'react'; 
import ToolBar from '../components/ToolBar';
import TableDetails from '../components/TableDetails';

export default function TrackScreen() {

  return (
    <div>
        <ToolBar/>
        <div style={{paddingTop:100}}/>
        <TableDetails/>
    </div>
  );
}

