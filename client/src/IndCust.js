
import Button from 'react-bootstrap/Button';
import NewProjModal from "./NewProjModal"
import React, { useState } from 'react';

function IndCust({customer}) {       


  const [show, setShow] = useState(false);
  const {name, address, id} = customer;

  const handleShow = () => setShow(true);
 
    return (<>
          <tr>           
            <td >{name}</td>
            <td>{address}</td>      
            <td> <Button onClick={handleShow} size="sm" variant="outline-success">New Project</Button>{' '}</td>                 
           </tr>  
           <NewProjModal name= {name} id={id} show = {show} setShow={setShow}/> 
        </>)

}

export default IndCust; 

