import React, { useEffect, useState } from 'react'; 
import ToolBar from '../components/ToolBar';
import TableDetails from '../components/TableDetails';

export default function TrackScreen() {

  const [orders, setOrders] = useState([]);


  useEffect(() => {
  
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div>
        <ToolBar/>
        <TableDetails/>
    </div>
  );
}

