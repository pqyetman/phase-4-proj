import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';



function IndProj({projects}) {

    const [modalShow, setModalShow] = useState(false);
    const [proj, setProj] = useState([])
    
    const { description = [] , open = [] , estimated_total_hours = [] , customer = [] , tasks = [], id  } = projects;

    let sumHours = tasks.map(tasks => tasks.hours)
    .reduce( (previousValue, currentValue) => previousValue + currentValue, 0,);

    let now = parseInt((sumHours/estimated_total_hours)*100)


    function passModalData () {

        fetch(`/projects/${id}/tasks`)
        .then((response) => response.json())
        .then((data) => setProj(data));
    
        
        setModalShow(true)
    }
       



 
    return (<>
          <tr onClick = {()=> passModalData()} >           
            <td >{description}</td>
            <td>{customer.name}</td>      
            <td>{estimated_total_hours}</td>  
            <td>{open ? <ProgressBar now={now} label={`${now}%`} /> : "Project Closed"}</td>          
           </tr>
        <MyVerticallyCenteredModal  
        id={id}
        proj = {proj}  
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>)

}

export default IndProj; 